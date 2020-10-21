import React from 'react';
import Animation from "@/animation/Animation";

function KeyWords(props) {
    let {keyWords} = props;
    return (
        <Animation animation="fade" className="key-words">
            <span>
                <p className="bold">Keywords: </p>
            </span>

            <div className="key-words-wrapper">
                {keyWords &&
                keyWords.map(keyword => {
                        return  <p className="nextjs">{keyword}</p>

                    })
                }
            </div>

        </Animation>
    );
}

export default KeyWords;