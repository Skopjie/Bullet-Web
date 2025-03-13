import PropTypes from "prop-types";

// idea, porciones de la pagina
export default function Section({ children, className = "", background = "White"}) {
    let typeStyle = `bg-${background.toLowerCase()}`;

    return(
        <section className={`bul-section ${typeStyle} ${className}`}>
            <div className="bul-section-container">
                {children}
            </div>
        </section>
    );
}   

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    background: PropTypes.oneOf(["White", "Gray", "Primary", "Secondary"]),
};