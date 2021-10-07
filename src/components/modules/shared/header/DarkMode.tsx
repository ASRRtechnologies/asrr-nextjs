import React from 'react';
import Sun from "@/icons/Sun";
import Moon from "@/icons/Moon";
import IconButton from "@/modules/shared/buttons/IconButton";

function DarkMode({darkmode, toggleDarkmode}) {
    return (
        <div>
            {darkmode ? <IconButton onClick={toggleDarkmode} mode="darkmode" buttonType="icon" children={<Sun/>}/> :
                <IconButton mode="darkmode" buttonType="icon" children={<Moon/>} onClick={toggleDarkmode}/>}
        </div>
    );
}

export default DarkMode;
