import React from 'react';
import img from "../../../public/assets/images/landing/colorful-earth-hq.jpg";

function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={img} alt="image"/>
            </div>

            <h4>Bouw</h4>
            <h3>Text lorem ipsum dex</h3>

        </div>
    );
}

export default Card;