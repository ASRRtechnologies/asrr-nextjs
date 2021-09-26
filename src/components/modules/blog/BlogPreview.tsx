import React from 'react';
import blogStyles from "./blogStyles.module.scss"
import Section from "@/modules/shared/section/Section";
import BlogCard from "@/modules/blog/BlogCard";
import {Fade} from "react-awesome-reveal";
import {animationsSettings} from "../../../data/animations-settings";
import Title from "../../utillities/titles/Title";

function Blog(props) {
    const {allBlogs, content} = props;
    const basePath = (blogType: string, projectName: string) => `/content/blog/posts/${blogType}/nl/${projectName}`;
    const filteredBlogs = allBlogs.filter((blog) => blog.info.preview); //Return all cases where preview is true

    return (
        <Section>
            <Title title={content.title} text={content.text}/>
            <div className={blogStyles.grid}>
                {filteredBlogs.map((post, i) => {
                    //Set delay for each uneven card. TODO make cards on mobile just same speed
                    const animationSettings = animationsSettings({}, i)
                    return (
                        <Fade direction="up" {...animationSettings}>
                            <BlogCard {...post} basePath={basePath(post.type, post.title)}/>
                        </Fade>
                    )
                })}
            </div>
        </Section>
    );
}

export default Blog;
