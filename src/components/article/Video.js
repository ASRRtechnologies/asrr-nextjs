import React from 'react';
import video from "../../../public/assets/videos/demo/rdp/2-fa-high.mp4";

function Video(props) {
    return (
        <div className="aspect-ratio-container">

            <div className="aspect-ratio-wrapper full-width-aspect-ratio">
                <video autoPlay muted loop id="myVideo">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    );
}

export default Video;