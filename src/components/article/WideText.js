import React from 'react';
import Animation from "@/animation/Animation";

function WideText(props) {
    return (
        <Animation animation="fade" className="wide-text margin-bottom-article-section">

            <h2>Title with a very long name</h2>

            <p>Large text hereee Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


        </Animation>
    );
}

export default WideText;