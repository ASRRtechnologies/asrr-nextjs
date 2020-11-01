import React from 'react';
import Animation from "@/animation/Animation";
import Fade from "react-reveal";

function KeyWords(props) {
    let {keyWords} = props;
    return (
        <Fade bottom>
            <div className="key-words">
            <span>
                <p className="bold">Keywords: </p>
            </span>

                <div className="key-words-wrapper">
                    {keyWords && keyWords.map(keyword => {
                            return <p className="nextjs">{keyword}</p>
                        }
                    )}
                </div>

            </div>
        </Fade>
    );
}

export default KeyWords;