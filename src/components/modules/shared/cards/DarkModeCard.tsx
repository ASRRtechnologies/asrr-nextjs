import React from 'react';
import styled from "@emotion/styled";
import {CardDarkModeProps} from "@/modules/shared/cards/types";

const StyledCard = styled("div")<CardDarkModeProps>`
  background-color: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.card.shadow};
`

function DarkModeCard(props) {
    return (
        <StyledCard className={props.className} theme={""}>
            {props.children}
        </StyledCard>
    );
}

export default DarkModeCard;
