import React from 'react';
import cardStyles from '@/modules/shared/cards/cards.module.scss';
import AspectRatio from '@/library/aspect-ratio/AspectRatio';
// @ts-ignore
import placeholder from '#/team/placeholder.png';
import { BlogCardProps } from '@/modules/pages/blog/types';
import { useRouter } from 'next/router';
import LinkText from '../../shared/text/LinkText';

function BlogCard(props: BlogCardProps) {
  const projectName = props.title;
  const { image, alt, title, text } = props.card;
  const { client, date, author, tags } = props.info;
  const router = useRouter();

  const convertedDate = new Date(date);
  const noTime = new Date(
    convertedDate.getFullYear(),
    convertedDate.getMonth(),
    convertedDate.getDate()
  );

  const goToBlog = () => router.push(`/blog/${props.type}/${projectName}`);

  // @ts-ignore
  return (
    <div className={cardStyles.card} onClick={goToBlog}>
      <AspectRatio x={4} y={3}>
        <img
          src={image ? `${props.basePath}/${image}` : placeholder.src}
          alt={alt}
        />
      </AspectRatio>
      <div className={cardStyles.border} />

      <h1 className="h6 not-bold">{date}</h1>

      <h2 className="h4">{title}</h2>

      <div className={cardStyles.text}>
        <p className="no-margin">{text}</p>
        <LinkText
          href={`/blog/${props.type}/${projectName}`}
          customLink={false}
          classes="bold lees-meer"
          title={null}
        />
      </div>

      {/*<div className={cardStyles.tags}>*/}
      {/*    {tags?.map((tag) => <Tag href={`/blog`} customLink={false} className="h6" title={tag}/>)}*/}
      {/*</div>*/}
    </div>
  );
}

export default BlogCard;
