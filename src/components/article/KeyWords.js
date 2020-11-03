import React from 'react';
import Fade from "react-reveal";

function KeyWords(props) {
    let {keyWords, compact} = props;
    return (
        <Fade>
            <div className="article-keywords">
                <div className="article-keywords-wrapper">
                    {!compact && <p className="label bold">Keywords:&nbsp;</p>}
                    {keyWords && keyWords.map((keyword, i) => {
                        return(
                            keyWords.length=== (i+1) ?
                                (<p className="nextjs label">{`${keyword}`}&nbsp;</p>)
                                :
                                (<p className="nextjs label">{`${keyword}`}&nbsp; - &nbsp; </p>)
                        )
                    })}
                </div>
            </div>
        </Fade>
    );
}

export default KeyWords;



