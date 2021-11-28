import React, { useEffect } from 'react';
import Section from '@/modules/shared/section/Section';
import BlogCard from '@/modules/pages/blog/BlogCard';
import { Fade } from 'react-awesome-reveal';
import { animationsSettings } from '../../../../data/animations-settings';
import MaxTwoColGrid from '@/modules/shared/layout/MaxTwoColGrid';
import useSearchFilter from '@/modules/shared/search/useSearchFilter';
import SearchFilter from '@/modules/shared/search/SearchFilter';

function Blog({ allBlogs}) {
  const basePath = (blogType: string, projectName: string) =>
    `/content/blog/posts/${blogType}/nl/${projectName}`;

  const { searchItems, filterList, activeFilters, toggleFilters } =
    useSearchFilter(allBlogs);

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

  useEffect(() => {
    console.log(searchItems);
  }, [allBlogs]);

  return (
    <Section>
      <SearchFilter filterList={filterList} />
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
    </Section>
  );
}

export default Blog;
