import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Selector({ className = "", options = [], placeholder = null, onChange = null }) {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [localOptions, setLocalOptions] = useState([]);

    const handleSelect = (opt) => {
        setSelected(opt.value);
        setVisible(false);
        if (onChange) onChange(opt);
    };

    const handleVisible = () => {
        setVisible(prev => !prev);
    };    

    useEffect(() => {
        setLocalOptions(placeholder ? [{ text: placeholder, value: null }, ...options] : options);
    }, [options, placeholder]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".bul-selector")) {
                setVisible(false);
            }
        };
        if (visible) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [visible]);

    return (
        <div className={`bul-selector ${className}`}>

            <div className='bul-selector-selection' onClick={handleVisible}>
                <p>{selected !== null ? localOptions.find(opt => opt.value === selected)?.text : placeholder ?? "Seleccione la busqueda"}</p>
                <i className="fa-solid fa-chevron-down"></i>
            </div>

            {visible && (
                <ul className='bul-selector-options'>
                    {localOptions.map((opt, index) => (
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
            )}
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
    placeholder: PropTypes.string,
};
