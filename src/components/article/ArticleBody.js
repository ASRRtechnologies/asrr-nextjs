import React from 'react';
import Section from "@/layout/Section";
import Application from "@/layout/Application";

function ArticleBody(props) {
    return (
        <div className={`article-body ${props.className}`}>
            {props.children}
        </div>
    );
}

export default ArticleBody;
