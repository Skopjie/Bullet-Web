import PropTypes from 'prop-types';

export default function SelectorPagination({ slotSelected = 1, maxSlotNumber = 1, className = "", type = "Primary" }) {
  return (
    <div className={`bul-selector-pagination ${className}`}>
      {Array.from({ length: maxSlotNumber }).map((_, i) => (
        <div 
          key={i} 
          className={`bul-selector-pagination-slot ${slotSelected === i ? "bul-selector-pagination-slot-selected" : ""}`}
        />
      ))}
    </div>
  );
};

SelectorPagination.propTypes = {
  maxSlotNumber: PropTypes.number.isRequired,
  slotSelected: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.oneOf(["Primary", "Secondary", "Warning", "Success", "Error", "Normal"]),
};
