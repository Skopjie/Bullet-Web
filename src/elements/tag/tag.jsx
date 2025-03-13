import PropTypes from 'prop-types';

import { getTextSize, getContainerTypeClass } from '../../utils/class_selector_utils';

export default function Tag({ children, className = "", type = "Primary", aspect="Normal", size="Medium" }) {
    return(
        <div className={`bul-tag ${getContainerTypeClass(type, aspect)} ${className} ${getTextSize(size)}`}>
            {children}
        </div>
    );
}

Tag.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(["Primary", "Secondary", "Warning", "Success", "Error", "Normal", "Transparent"]),
    aspect: PropTypes.oneOf(["Normal", "Outline", "Dash", "Transparent"]),
    size: PropTypes.oneOf(["Small", "Medium", "Large"]),
};