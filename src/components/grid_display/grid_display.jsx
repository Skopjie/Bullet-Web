import PropTypes from "prop-types";

export default function GridDisplay({
    children,
    className = "",
    numberOfColumns = 1,
    columnWidths = [],
    gap = 1
}) {
    const gridColumns = columnWidths.length > 0 
        ? columnWidths.join(" ") 
        : `repeat(${numberOfColumns}, 1fr)`;
    
    const gridGap = `${gap}rem`;

    return (
        <div className={`bul-grid-display ${className}`} 
             style={{
                 display: "grid",
                 gridTemplateColumns: gridColumns,
                 gap: gridGap
             }}>
            {children}
        </div>
    );
}

GridDisplay.propTypes = {
    className: PropTypes.string,
    numberOfColumns: PropTypes.number,
    columnWidths: PropTypes.arrayOf(PropTypes.string),
    gap: PropTypes.number,
    children: PropTypes.node,
};
