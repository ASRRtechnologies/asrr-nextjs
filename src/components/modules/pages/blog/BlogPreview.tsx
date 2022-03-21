import React from 'react';
import Section from '@/modules/shared/section/Section';
import BlogCard from '@/modules/pages/blog/BlogCard';
import { Fade } from 'react-awesome-reveal';
import { animationsSettings } from '../../../../data/animations-settings';
import Title from '../../../utillities/titles/Title';
import MaxTwoColGrid from '@/modules/shared/layout/MaxTwoColGrid';
import LinkText from '@/text/LinkText';

function Blog(props) {
  const { allBlogs, content } = props;
  const basePath = (blogType: string, projectName: string) =>
    `/content/blog/posts/${blogType}/nl/${projectName}`;
  const filteredBlogs = allBlogs.filter((blog) => blog.info.preview); //Return all cases where preview is true

  return (
    <Section>
      <Title title={content.title} text={content.text} />
      <MaxTwoColGrid>
        {filteredBlogs.map((post, i) => {
          //Set delay for each uneven card. TODO make cards on mobile just same speed
          const animationSettings = animationsSettings({}, i);
          return (
            <Fade
              key={i}
              style={{ width: '100%' }}
              direction="up"
              {...animationSettings}
            >
              <BlogCard {...post} basePath={basePath(post.type, post.title)} />
            </Fade>
          );
        })}
      </MaxTwoColGrid>

      <Fade triggerOnce={true}>
        <>
          <LinkText
            goToSection={true}
            customlink={false}
            href="/blog"
            title="Bekijk all onze blogposts"
          />
        </>
      </Fade>
    </Section>
  );
}

export default Blog;
