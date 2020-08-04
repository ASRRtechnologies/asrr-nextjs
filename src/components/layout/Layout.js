import React from 'react';
import styled from "@emotion/styled";

const Wrapper = styled('section')`
        background-image:  ${props => props.theme.layout};
`;

function Layout({children}) {
    return (
        <Wrapper className="layout">
            {children}
        </Wrapper>
    );
}

export default Layout;
