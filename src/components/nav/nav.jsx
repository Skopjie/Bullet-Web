import { FaAlignJustify, FaHouseChimney, FaLaptopCode, FaMagnifyingGlass} from "react-icons/fa6";
import {FaUser} from "react-icons/fa";
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false)
  const clickCollapsed = ()=> {
    setCollapsed(!collapsed);
    const navCollapse = document.querySelector('.nav-panel');
    if (collapsed) navCollapse.classList.add('collapsed');
    else navCollapse.classList.remove('collapsed');
  }

  const collapseNav = ()=> {
    if(collapsed){
      setCollapsed(false);
      
      const navCollapse = document.querySelector('.nav-panel');
      navCollapse.classList.add('collapsed');
    }
  }

  useEffect(() => {
    const closeNavOnClickOutside = (event) => {
      if (!event.target.closest('#my-nav')) {
        collapseNav();
      }
    };

    document.addEventListener('click', closeNavOnClickOutside);

    return () => {
      document.removeEventListener('click', closeNavOnClickOutside);
    };
  }, [collapsed]);

  return (
    <div id="my-nav">
      <div className='nav'>
        <div className='nav-container container'>
          <button  className='nav-collapse button-primary' onClick={() => clickCollapsed()}>
          <FaAlignJustify size={"1.2rem"}></FaAlignJustify>
          </button>

          <div className='nav-panel collapsed'>
            <Link to={`/`} className='nav-element' onClick={() => clickCollapsed()}>
              <FaHouseChimney size={"1.5rem"}></FaHouseChimney>
              <p className='title-third'>Home</p>
            </Link>

            <Link to={`/aboutMe`} className='nav-element' onClick={() => clickCollapsed()}>
              <FaMagnifyingGlass size={"1.5rem"}></FaMagnifyingGlass>
              <p className='title-third'>About me</p>
            </Link>

            <Link to={`/projects/0`} className='nav-element' onClick={() => clickCollapsed()}>
              <FaLaptopCode size={"1.5rem"}></FaLaptopCode>
              <p className='title-third'>Projects</p>
            </Link>
          </div>

          <a className='button-fourth cv-button' href='../../public/assets/documents/DiegoMatillaCV.pdf' download="DiegoMatillaCV.pdf">
              <p style={{"margin": 0}}>Curriculum</p>
              <FaUser size={"1.2rem"}></FaUser>
            </a>
        </div>
      </div>
    </div>
  );
}