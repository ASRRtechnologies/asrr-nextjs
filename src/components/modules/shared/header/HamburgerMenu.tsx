import React from 'react';
import hamburgerStyles from "./hamburger.module.scss";

function HamburgerMenu({open, onClick}) {
    return (
        <div onClick={onClick} className={`${hamburgerStyles.hamburger} ${open && hamburgerStyles.hamburgerOpen}`}>
            <div className={hamburgerStyles.barOne}/>
            <div className={hamburgerStyles.barTwo}/>
            <div className={hamburgerStyles.barThree}/>
        </div>
    );
}

export default HamburgerMenu;
