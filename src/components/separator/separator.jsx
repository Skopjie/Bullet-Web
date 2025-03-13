import PropTypes from "prop-types";

export default function Separator({children, className = ""}) {
    return (
        <div className={`start-see-more ${className}`}>
            <div className="start-see-more-container">

                <div className='line-container line-left'>
                    <p className='line-see'></p>
                </div>

                <div className='line-container'>
                    <div className='line-content-anim'>
                        {children}
                    </div>
                </div>


                <div className='line-container line-right'>
                    <p className='line-see'></p>
                </div>

            </div>
      </div>
    );
}

Separator.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}