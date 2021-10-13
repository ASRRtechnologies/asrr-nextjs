import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  background-color: ${(props) => props.theme.navigation.background};
  box-shadow: ${(props) => props.theme.navigation.shadow};
`;

const Arrow = styled('polyline')`
  stroke: ${(props) => props.theme.navigation.font};
`;

const ScrollUp = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [arrowVisible, useArrow] = useState(false);

  const showArrow = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (scrolled > 10 && scrolled < 85) {
      useArrow(true);
    } else {
      useArrow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', showArrow);
  });

  return (
    <Wrapper
      onClick={scrollToTop}
      id="goTop"
      className={arrowVisible ? 'btn-top show-arrow' : 'btn-top hide-arrow'}
    >
      <svg
        className="arrow-up up"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5 0 50 80"
        xmlSpace="preserve"
      >
        <Arrow
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="0.375, 35.375 28.375, 0.375 58.67, 35.375 "
        />
      </svg>
    </Wrapper>
  );
};
export default ScrollUp;
