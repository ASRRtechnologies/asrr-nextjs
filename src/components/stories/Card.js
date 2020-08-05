import React from 'react';
import image from "#/clients/avatar/avatar.jpg"

function Card(props) {
    return (
        <div className="card">

            <span className="avatar">
                <img src={image}/>
            </span>

            <h3>-John Doe-</h3>
            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
            <h4>Form Architecture</h4>
        </div>
    );
}

export default Card;