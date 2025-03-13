import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Selector({ children, className = "", options = [], onChange = null }) {
    const [selected, setSelected] = useState(null);

    const handleSelect = (opt) => {
        setSelected(opt.value);
        if (onChange) onChange(opt);
    };

    return (
        <div className={`bul-selector ${className}`}>
            <div className='bul-selector-selection'>
                {/* Que esto sea un input de texto */}
                <p>Opcion</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <ul className='bul-selector-options'>
                <li>Escoge</li>
                {options.map((opt, index) => (
                    <li 
                        key={index} 
                        data-value={opt.value} 
                        onClick={() => handleSelect(opt)}
                        className={`${selected === opt.value ? "bul-selector-selected" : ""}`}
                        style={{ cursor: "pointer", fontWeight: selected === opt.value ? "bold" : "normal" }}
                    >
                        {opt.text}
                    </li>
                ))}
            </ul>
            {children}
        </div>
    );
}

Selector.propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
    children: PropTypes.node,
};
