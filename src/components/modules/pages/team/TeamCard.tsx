import React, { useState } from 'react';
import cardStyles from '@/modules/shared/cards/cards.module.scss';
import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import Accordion from '@/library/accordion/Accordion';
import { Fade } from 'react-awesome-reveal';
import ChevronRotatable from '@/icons/ChevronRotatable';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  position: string;
  phone?: string;
  email?: string;
  image?: string;
  basePath?: string;
  website?: string;
  story: string;
  alt?: string;
}

function formatPhoneNumber(phoneNumberString) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{1})(\d{1})(\d{3})(\d{3})(\d{2})$/);
  if (match) {
    const intlCode = match[1] ? '+1 ' : '';
    return [
      intlCode,
      '(',
      match[2],
      ') ',
      match[3],
      ' ',
      match[4],
      ' ',
      match[5],
      ' ',
      match[6],
    ].join('');
  }
  return null;
}

function TeamCard(props: TeamCardProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${cardStyles.card} ${cardStyles.teamCard}`}>
      <AspectRatio x={4} y={3}>
        <Image
          src={
            props.image
              ? `${props.basePath}/${props.image}`
              : '/assets/images/team/placeholder.png'
          }
          layout="fill"
          alt={props?.alt}
        />
      </AspectRatio>

      <div className={cardStyles.border} />

      <div className={cardStyles.name}>
        {props.website ? (
          <a
            className="h4 hover-link"
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </a>
        ) : (
          <p className="h4">{props.name}</p>
        )}
        <ChevronRotatable
          rotate={collapsed}
          onClick={() => setCollapsed(!collapsed)}
          color={'black'}
        />
      </div>

      <Accordion collapsed={collapsed}>
        {/*@ts-ignore*/}
        <Fade duration={800}>
          <p>{props.story}</p>
        </Fade>
      </Accordion>

      <p className="h5">{props.position}</p>

      {props.email && (
        <a href={'mailto:' + props.email} style={{ marginRight: '10px' }}>
          {props.email}
        </a>
      )}

      {props.phone && (
        <a href={'tel:' + props.phone} className="h6">
          +31 {formatPhoneNumber(props.phone)}
        </a>
      )}

      {props.email && (
        <a href={'https://teams.microsoft.com/l/chat/0/0?users=' + props.email}>
          MS Teams
        </a>
      )}
    </div>
  );
}

export default TeamCard;
