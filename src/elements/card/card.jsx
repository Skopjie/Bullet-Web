import PropTypes from "prop-types";

import {getTextAlign, getSelectableClass} from "../../utils/class_selector_utils";


export default function Card({children, className = "", background = "White", textAlign = "Center", selectable = false}) {
    let typeStyle = `bg-${background.toLowerCase()}`;

    return (
        <div className={`${getSelectableClass(selectable) } ${className} ${typeStyle} ${getTextAlign(textAlign)} bul-card`}>
            {children}
        </div>
    );
}

Card.propTypes = {
    className: PropTypes.string,
    background: PropTypes.oneOf(["White", "Gray", "Primary", "Secondary", "Transparent"]),
    textAlign: PropTypes.oneOf(["Center", "Left", "Right"]),
    selectable: PropTypes.bool,
    children: PropTypes.node,
}