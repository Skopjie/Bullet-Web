import PropTypes from "prop-types";

export default function Loading({ children, className = ""}) {

    return(
        <div className={`panel_loading ${className}`}>
            <div className="loader">
                <span className="loader-text">
                    {children}
                </span>
                <span className="load"></span>
            </div>
        </div>
    );
}   

Loading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};