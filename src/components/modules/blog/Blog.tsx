import React from 'react';
import blogStyles from "./blogStyles.module.scss"
import Section from "@/modules/shared/section/Section";
import BlogCard from "@/modules/blog/BlogCard";

function Blog(props) {
    const {allBlogs, customBasePath} = props;
    console.log(props);

    return (
        <Section>
            <div className={blogStyles.grid}>
                {allBlogs.map((project) => {
                    const basePath = customBasePath(project.title);
                    return <BlogCard {...project} basePath={basePath}/>
                })}
            </div>
        </Section>
    );
}

export default Blog;
