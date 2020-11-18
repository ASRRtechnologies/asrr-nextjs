import React from 'react';

function ArticleContent(props) {
    return (
        <div className="article-content">
            {props.children}
        </div>
    );
}

export default ArticleContent;
