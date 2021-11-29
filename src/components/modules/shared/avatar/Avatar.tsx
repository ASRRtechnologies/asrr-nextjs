import React from 'react';
import Image from 'next/image';
import { Author } from '../../../../data/Authors';
import avatarStyles from './styles.module.scss';

function Avatar(props: Author) {
  return (
    <div className={avatarStyles.avatarWrapper}>
      <span className={avatarStyles.avatar}>
        <Image src={props.image} alt={props.name} layout="fill" />
      </span>
      <p>{props.name}</p>
    </div>
  );
}

export default Avatar;
