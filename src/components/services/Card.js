import React from 'react';
import ReadMore from "../text/ReadMore";

function Card(props) {
    return (
        <div className="card">
            <h3>Application Dev</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s</p>
            <ReadMore to="/" text="Read more"/>
        </div>
    );
}

export default Card;
