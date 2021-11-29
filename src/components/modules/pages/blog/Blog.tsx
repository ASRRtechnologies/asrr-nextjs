import React from 'react';
import BlogCard from '@/modules/pages/blog/BlogCard';
import { Fade } from 'react-awesome-reveal';
import { animationsSettings } from '../../../../data/animations-settings';
import MaxTwoColGrid from '@/modules/shared/layout/MaxTwoColGrid';

function Blog({ searchItems }) {
  const basePath = (blogType: string, projectName: string) =>
    `/content/blog/posts/${blogType}/nl/${projectName}`;

  //Fuzzy search
  // <input
  //     type="text"
  //     placeholder="Search"
  //     onChange={async (e) => {
  //         const { value } = e.currentTarget
  //         // Dynamically load fuse.js
  //         const Fuse = (await import('fuse.js')).default
  //         const fuse = new Fuse(names)
  //
  //         setResults(fuse.search(value))
  //     }}

  // useEffect(() => {
  //   console.log(searchItems);
  // }, [allBlogs]);

  return (
    <>
      <MaxTwoColGrid>
        {searchItems.map((post, i) => {
          //Set delay for each uneven card. TODO make cards on mobile just same speed
          const animationSettings = animationsSettings({}, i);
          return (
            <Fade style={{ width: '100%' }} {...animationSettings} key={i}>
              <BlogCard
                key={post.title + i}
                basePath={basePath(post.type, post.title)}
                {...post}
              />
            </Fade>
          );
        })}
      </MaxTwoColGrid>
    </>
  );
}

export default Blog;
