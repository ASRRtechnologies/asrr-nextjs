import React from 'react';

function NextArticleWrapper(props) {
    return (
        <div className={`next-article-wrapper ${props.className}`}>
            <div className="next-article">
                {props.children}
            </div>
        </div>
    );
}

export default NextArticleWrapper;
