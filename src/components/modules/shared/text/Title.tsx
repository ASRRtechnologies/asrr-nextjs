import React from 'react';
import { Fade } from 'react-awesome-reveal';
import titleStyles from './title.module.scss';

interface TitleProps {
  title: string;
  text?: string;

  [x: string]: string;
}

function Title(props: TitleProps) {
  const { title, text } = props;

  return (
    <div className={titleStyles.title}>
      <Fade delay={300} triggerOnce={true}>
        <h1 className="h2 primary-color">{title}</h1>
        {text ? <h2 className="h3 not-bold">{text}</h2> : <></>}
      </Fade>
    </div>
  );
}

export default Title;
