import React from 'react';
import Animation from "@/animation/Animation";

function KeyWords(props) {
    return (
        <Animation animation="fade" className="key-words">
            <span>
                <p className="bold">Keywords: </p>
            </span>

            <div className="key-words-wrapper">
                <p className="nextjs">NextJS</p>
                <p className="nextjs">Kubernetes</p>
                <p className="nextjs">Spring</p>
            </div>

        </Animation>
    );
}

export default KeyWords;