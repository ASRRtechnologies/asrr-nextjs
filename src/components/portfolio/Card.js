import React, {useContext} from 'react';
import {MouseContext} from '../../context/animations/MouseContext'

function Card({img, title, tag}) {

    const mouse = useContext(MouseContext);

    return (
        <div onMouseOver={()=> {mouse.onHover("projects")}} onMouseLeave={()=> {mouse.onLeave()}} className="card">
            <div className="image">
                <img src={img} alt="image"/>
            </div>
            <h5>{tag}</h5>
            <h3>{title}</h3>
        </div>
    );
}

export default Card;
