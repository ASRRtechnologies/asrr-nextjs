import React from 'react';
import ReadMore from "../text/ReadMore";
import Section from "@/layout/Section";
import useI18n from "../../hooks/use-i18n";
import styled from "@emotion/styled";

const Wrapper = styled('div')`
             border-bottom: ${props => props.theme.card.border}; 
`;

const Icon = styled('div')`
             background-color: ${props => props.theme.card.background}; 
             box-shadow: ${props => props.theme.card.shadow}; 
      svg{
        path{
          fill:${props => props.theme.fonts.title}
        }
      } 
`;

function Card({title, text, icon, className, to}) {
    const i18n = useI18n();
    return (
        <Wrapper className={`card`}>
            <Icon className="icon">
                {icon}
            </Icon>
            <div className="text">
                <h2>{i18n.t(title)}</h2>
                <p>{i18n.t(text)}</p>
                <ReadMore small to={to}>{i18n.t("buttons.read")}</ReadMore>
            </div>
        </Wrapper>
    );
}

export default Card;
