import React, {useState} from 'react';

function Hamburger({open, ...rest}) {

    return (
        <div  {...rest} className="hamburger-container">
                <div className={`menu-toggle-label ${open && "open"}`}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
        </div>
    );
}

export default Hamburger;
