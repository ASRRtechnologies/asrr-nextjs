import React from 'react';

function ArticleBody(props) {
    return (
        <div className={`article-body ${props.className}`}>
            {props.children}
        </div>
    );
}

export default ArticleBody;
