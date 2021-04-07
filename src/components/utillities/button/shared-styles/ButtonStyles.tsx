/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {styles} from "@/styles/global";

export const BaseButtonStyle = css`
  width: auto;
  height: auto;
  padding: 16px 20px;
  text-align: center;
  cursor: pointer;

  a, p {
    color: inherit;
  }

  border-radius: ${styles.buttonBorderRadius};
`

export const ButtonStyleDefault = css`
  background-color: ${styles.primaryColor} !important;
  color: ${styles.whiteFont};
`

export const ButtonStyleOutlined = css`
  background-color: transparent;
  color: ${styles.primaryColor};
  border: 2px solid ${styles.primaryColor};

  &:hover {
    background-color: ${styles.primaryColor};
    color: ${styles.whiteFont};
  }

`

export const ButtonStyleOutlinedHoverDisabled = css`
  background-color: ${styles.primaryColor} !important;
  color: ${styles.whiteFont};
`

export const ButtonStyleDefaultHoverDisabled = css`
  background-color: ${styles.primaryColor} !important;
  color: ${styles.whiteFont};
`

export const ButtonStyleDisabled = css`
  background-color: ${styles.primaryColor} !important;
  color: ${styles.whiteFont};
`
