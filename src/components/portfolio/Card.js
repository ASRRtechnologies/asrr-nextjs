import React from 'react';

function Card({img, title, tag}) {
    return (
        <div className="card">
            <div className="image">
                <img src={img} alt="image"/>
            </div>

            <h4>{tag}</h4>
            <h3>{title}</h3>

        </div>
    );
}

export default Card;
