import React from 'react';
import image from "#/clients/avatar/avatar.jpg"

function Card(props) {
    return (
        <div className="card">

            <span className="avatar">
                <img src={image}/>
            </span>

            <h4>Person x</h4>
            <h4>Form Architecture </h4>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.</p>

        </div>
    );
}

export default Card;