import React from 'react';
import styledLink from './link.module.scss';
import LinkText from './LinkText';

interface TagProps {
  href: string;
  title: string;
  classes?: string;

  [x: string]: string;
}

function Tag(props: TagProps) {
  const { href, title } = props;
  return (
    <>
      <div className={styledLink.tags}>
        <LinkText href={href} customlink={false} className="h6" title={title} />
      </div>
    </>
  );
}

export default Tag;
