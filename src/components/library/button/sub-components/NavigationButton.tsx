/** @jsxImportSource @emotion/react */
import React from 'react';
import { NavigationButtonProps } from '@/library/button/types';
import Link from 'next/link';
import { BaseButtonStyle } from '@/library/button/shared-styles/ButtonStyles';
import { useButtonStyles } from '@/library/button/hooks/button-hooks';
import { css } from '@emotion/react';

function NavigationButton(props: NavigationButtonProps) {
  const { to, text, buttonStyle } = props;

  const { styles } = useButtonStyles(buttonStyle);

  return (
    <div
      css={css`
        ${BaseButtonStyle} ${styles}
      `}
    >
      <Link href={to}>
        <a>{text}</a>
      </Link>
    </div>
  );
}

export default NavigationButton;
