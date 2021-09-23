import React from 'react';
import blogStyles from "./blogStyles.module.scss"
import Section from "@/modules/shared/section/Section";
import BlogCard from "@/modules/blog/BlogCard";
import { Fade } from "react-awesome-reveal";
import {animationsSettings} from "../../../data/animations-settings";

function Blog(props) {
    const {allBlogs, customBasePath} = props;

    return (
        <Section>
            <div className={blogStyles.grid}>
                {allBlogs.map((post, i) => {
                    const basePath = customBasePath(post.title);

                    //Set delay for each uneven card. TODO make cards on mobile just same speed
                    const animationSettings = animationsSettings({}, i);

                    return (
                        <Fade {...animationSettings}>
                            <BlogCard {...post} basePath={basePath}/>
                        </Fade>
                    )
                })}
            </div>
        </Section>
    );
}

export default Blog;
