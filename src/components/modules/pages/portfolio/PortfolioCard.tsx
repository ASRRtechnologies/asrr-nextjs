import React from 'react';
import cardStyles from '@/modules/shared/cards/cards.module.scss';
import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import { PortfolioCardProps } from '@/modules/pages/portfolio/types';
import { useRouter } from 'next/router';
import LinkText from '../../shared/text/LinkText';

function PortfolioCard(props: PortfolioCardProps) {
  const projectName = props.title;
  const { image, alt, title, text } = props.card;
  const { client, date, author, tags } = props.info;
  const router = useRouter();
  const goToCase = () => router.push(`/portfolio/${projectName}`);

  return (
    <div className={cardStyles.card} onClick={goToCase}>
      <AspectRatio x={4} y={3}>
        <img
          src={
            image
              ? `${props.basePath}/${image}`
              : '/images/team/placeholder.png'
          }
          alt={alt}
        />
      </AspectRatio>
      <div className={cardStyles.border} />

      <h1 className="h5 not-bold">{client}</h1>

      <h2 className="h4">{title}</h2>

      <div className={cardStyles.text}>
        <p className="no-margin">{text}</p>
        <LinkText
          href={`/portfolio/${projectName}`}
          customLink={false}
          classes="bold lees-meer"
          title={null}
        />
      </div>

      {/*<div className={cardStyles.tags}>*/}
      {/*    {tags?.map((tag) =><Tag href={`/portfolio`} customLink={false} className="h6" title={tag}/>)}*/}
      {/*</div>*/}
    </div>
  );
}

export default PortfolioCard;
