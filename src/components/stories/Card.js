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
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.</p>

        </div>
    );
}

export default Card;