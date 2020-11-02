import React from 'react';
import Section from "@/layout/Section";
import Application from "@/layout/Application";

function ArticleContent(props) {
    return (
        <div className="article-content">
            {props.children}
        </div>
    );
}

export default ArticleContent;
