import { Link } from 'react-router-dom'
import {FaGithub, FaLinkedin, FaMailBulk, FaCopy, FaBitbucket} from "react-icons/fa";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";


const showCopyMessage = () => {
  Toastify({
    text: "Email copiado!",
    duration: 3000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#7562E0",
    },
    onClick: function () {} // Callback after click
  }).showToast();
};

const handleCopyClick = () => {
  navigator.clipboard.writeText("diego.matilla.dev@gmail.com");
  showCopyMessage();
};


function FooterExample() {
  return (
    <div className='my-footer-content'>
      <div className='panel-mail'>
        <div className='mail-title'>
          <FaMailBulk size={"2rem"} className='footer-icon'></FaMailBulk>
          <h3>Mail</h3>
        </div>

        <div className='mail-content'>
          <h5 className='email'>diego.matilla.dev@gmail.com</h5>
          <div className='copy-icon' onClick={handleCopyClick}>
            <a>
              <FaCopy size={"2.25rem"} className='px-2'></FaCopy>
            </a>
          </div>
        </div>

      </div>
        <div className='panel-icons'>
          <a href={`https://github.com/Skopjie`} target="_blank" rel="noopener noreferrer">
            <FaGithub size={"2.5rem"} className='footer-icon'></FaGithub>
          </a>

          <a href={`https://bitbucket.org/Skopjie99`} target="_blank" rel="noopener noreferrer">
            <FaBitbucket size={"2.5rem"} className='footer-icon'></FaBitbucket>
          </a>

          <a href={`https://www.linkedin.com/in/diegomatilladelacierva/`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={"2.5rem"} className='footer-icon'></FaLinkedin>
          </a>
        </div>
        <small className='footer-copy mt-4'>© 2024 Designed & Developed by <span>Diego Matilla</span></small>
        <small className='footer-copy'>Made with <span>React</span></small>
    </div>
  );
}

export default FooterExample;