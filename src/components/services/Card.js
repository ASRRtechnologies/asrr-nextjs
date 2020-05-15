import React from 'react';
import ReadMore from "../text/ReadMore";

function Card(props) {
    return (
        <div className="card">
            <h3>Application Dev</h3>
            <p>Text lorem ipsum dex</p>
            <ReadMore to="/" text="Read more"/>
        </div>
    );
}

export default Card;