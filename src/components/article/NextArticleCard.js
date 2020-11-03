import React from 'react';

function NextArticleCard(props) {
    return (
        <div className={`next-article-card ${props.className}`}>
            {props.children}
        </div>
    );
}

export default NextArticleCard;
