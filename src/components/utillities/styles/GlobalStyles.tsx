import React from 'react';
import {Global, css} from '@emotion/react'

const GlobalStyle = css`
`

function GlobalStyles(props) {
    return (
        <Global styles={GlobalStyle}/>
    );
}

export default GlobalStyles;
