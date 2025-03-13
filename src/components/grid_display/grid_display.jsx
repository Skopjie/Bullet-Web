import PropTypes from "prop-types";

export default function GridDisplay({children, className = "", numberOfColumns = 1, gap = 1}) {
    const gridColumns = `repeat(${numberOfColumns}, 1fr)`;
    const gridGap = `${gap}rem`;

    return (
        <div className={`bul-grid-display ${className}`} style={{gridTemplateColumns: gridColumns, gap: gridGap}}>
            {children}
        </div>
    );
}

GridDisplay.PropTypes = {
    className: PropTypes.string,
    numberOfColumns: PropTypes.number,
    gap: PropTypes.number,
    children: PropTypes.node,
};