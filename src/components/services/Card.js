import React from 'react';
import ReadMore from "../text/ReadMore";
import Section from "@/layout/Section";
import useI18n from "../../hooks/use-i18n";
import styled from "@emotion/styled";
import Animation from "@/animation/Animation";

const Wrapper = styled(Animation)`
             border-bottom: ${props => props.theme.card.border}; 
`;

const Icon = styled('div')`
             background-color: ${props => props.theme.card.background}; 
        box-shadow: ${props => props.theme.card.shadow.services};
      svg{
        path{
          fill:${props => props.theme.fonts.title}
        }
      } 
`;

function Card({title, text, icon, className, to}) {
    const i18n = useI18n();
    return (
        <Wrapper className="service-card">
            {/*<Wrapper className={`card`}>*/}
                <Icon className="service-card-icon">
                    {icon}
                </Icon>
                <div className="service-card-text">
                    <h2>{i18n.t(title)}</h2>
                    <p>{i18n.t(text)}</p>
                    <ReadMore small to={to} text="buttons.read"/>
                </div>
            {/*</Wrapper>*/}
        </Wrapper>
    );
}

export default Card;
