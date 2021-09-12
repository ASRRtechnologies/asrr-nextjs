import React from 'react';
import styled from "@emotion/styled";
import {styles} from "@/utillities/styles/global_variabels";

export const StyledHeaderTab = styled.div`
  height: 100%;
  display: flex;
  width: auto;
`

function HeaderTab(props) {
    return (
        <StyledHeaderTab>
            {props.children}
        </StyledHeaderTab>
    );
}

export default HeaderTab;
