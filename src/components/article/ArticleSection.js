import React from 'react';
import Section from "@/layout/Section";
import Application from "@/layout/Application";

function ArticleSection(props) {
    return (
        <div className={`article-section ${props.className}`}>
            {props.children}
            {props.line && <hr/>}
        </div>
    );
}

export default ArticleSection;
