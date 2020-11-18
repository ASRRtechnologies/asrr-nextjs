import React from 'react';
import Fade from "react-reveal";
import styled from "@emotion/styled";
import Section from "@/layout/Section";

function KeyWords(props) {
    let {keyWords, compact} = props;

    const Wrapper = styled(Section)`
        border-bottom-color: ${props => props.theme.utilities.border.background};
`;

    return (
        <Fade>
            <Wrapper className="article-keywords">
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
            </Wrapper>
        </Fade>
    );
}

export default KeyWords;



