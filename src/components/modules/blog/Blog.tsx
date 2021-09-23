import React from 'react';
import blogStyles from "./blogStyles.module.scss"
import Section from "@/modules/shared/section/Section";
import BlogCard from "@/modules/blog/BlogCard";
import { Fade } from "react-awesome-reveal";
import {cardAnimations} from "../../../data/card-animations";

function Blog(props) {
    const {allBlogs, customBasePath} = props;

    return (
        <Section>
            <div className={blogStyles.grid}>
                {allBlogs.map((post) => {
                    const basePath = customBasePath(post.title);
                    return (
                        <Fade direction="up" {...cardAnimations}>
                            <BlogCard {...post} basePath={basePath}/>
                        </Fade>
                    )
                })}
            </div>
        </Section>
    );
}

export default Blog;
