import React from "react";

export default function LinkedList({ children }) {
    return (
        <div className="bul-linked-list">
            <div className="bul-linked-list-line">
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="bul-linked-list-element">
                        <div className="bul-linked-list-element-circle">
                            X
                        </div>
                        <div className="bul-linked-list-element-content">
                            {child}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
