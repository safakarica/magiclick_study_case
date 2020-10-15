import React from 'react';

function ButtonItemComponent(props) {
    const {hasIcon, btnText, bordered} = props;
    
    return (
            <div className={`btn-item ${bordered ? "bordered" : ""}`}>
                <span>{btnText}</span>
                {
                    hasIcon &&
                    <i className="icon-right-arrow"/>
                }
            </div>
    );
}

export default ButtonItemComponent;