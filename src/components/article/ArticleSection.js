import React from 'react';

function ArticleSection(props) {
    return (
        <div className={`article-section ${props.className}`}>
            {props.children}
            {props.line && <hr/>}
        </div>
    );
}

export default ArticleSection;
