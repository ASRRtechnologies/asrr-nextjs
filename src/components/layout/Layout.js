import React from 'react';
import styled from "@emotion/styled";

const Wrapper = styled('section')`

        background-color: ${props => props.theme.layout.background};
        
        h1, h2, h3, h4, h5  {
          color: ${props => props.theme.fonts.title}
        }
        
        p{
          color:${props => props.theme.fonts.text}
        }
`;

function Layout({children}) {
    return (
        <Wrapper className="layout">
            {children}
        </Wrapper>
    );
}

export default Layout;