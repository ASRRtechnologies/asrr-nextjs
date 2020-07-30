import React from 'react';
import ReadMore from "../text/ReadMore";
import Section from "@/layout/Section";
import useI18n from "../../hooks/use-i18n";
import styled from "@emotion/styled";

const Wrapper = styled('div')`
      svg{
        path{
          fill:${props => props.theme.fonts.title}
        }
      } 
      
      &.card-preview{
             background-color: ${props => props.theme.card.background}; 
             box-shadow: ${props => props.theme.card.shadow}; 
      }
`;

function Card({title, text, icon, className}) {
    const i18n = useI18n();
    return (
        <Wrapper className={`card ${className}`}>
            {icon}
            <h3>{i18n.t(title)}</h3>
            <p>{i18n.t(text)}</p>
            <ReadMore small to="/">{i18n.t("buttons.read")}</ReadMore>
        </Wrapper>
    );
}

export default Card;
