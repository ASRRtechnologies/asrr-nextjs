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
                {allBlogs.map((post, i) => {
                    const basePath = customBasePath(post.title);

                    //Set delay for each uneven card. TODO make cards on mobile just same speed
                    const animationSettings = cardAnimations({duration: i % 2 === 0 ? 1000 : 1500})

                    return (
                        <Fade direction="up" {...animationSettings}>
                            <BlogCard {...post} basePath={basePath}/>
                        </Fade>
                    )
                })}
            </div>
        </Section>
    );
}

export default Blog;
