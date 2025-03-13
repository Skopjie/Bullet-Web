import PropTypes from "prop-types";
import {getContainerTypeClass } from '../../utils/class_selector_utils';

export default function StatBox({children, className = "", width = 1, type = "Primary", aspect="Normal"}) {
    const boxWidth = `${width}rem`;
    
    return (
        <div className={`bul-stat-box ${className} ${getContainerTypeClass(type, aspect)}`} style={{width: boxWidth}}>
            {children}
        </div>
    );
}

StatBox.PropTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    width: PropTypes.number,
    background: PropTypes.oneOf(["White", "Gray", "Primary", "Secondary"]),
};