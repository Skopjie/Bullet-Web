import PropTypes from 'prop-types';
import {getContainerTypeClass } from '../../utils/class_selector_utils';

export default function CustomButton({ onClick, className = "", type = "Primary", aspect="Normal", children, isSubmit = false}){
  return (
    <button 
      type={isSubmit ? "submit" : "button"} 
      onClick={onClick} 
      className={`${getContainerTypeClass(type, aspect)} ${className} bul-button`}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["Primary", "Secondary", "Warning", "Success", "Error", "Normal"]),
  aspect: PropTypes.oneOf(["Normal", "Outline","Dash", "Transparent"]),
  children: PropTypes.node,
  isSubmit: PropTypes.bool,
};

