import React from 'react';
import layoutStyles from "@/modules/shared/layout/layout.module.scss";

function MaxTwoColGrid(props) {
    return (
        <div className={layoutStyles.twoGrid}>
            {props.children}
        </div>
    );
}

export default MaxTwoColGrid;
