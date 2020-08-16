import React from 'react';
import {clients} from "../../data/clients";
import styled from '@emotion/styled'
import Title from "@/text/Title";
import Section from "@/layout/Section";
import Animation from "@/animation/Animation";

const Wrapper = styled('section')`
        // background-color: ${props => props.theme.home.clients}; 
        svg{
          path{
            fill:  ${props => props.theme.fonts.title}
          }
        }
`;

function Clients(props) {
    return (
        <Animation animation="fade-up" delay="200">
            <Section>
                <Title className="no-margin" title={'clients.title.header'}/>
                <Wrapper className="clients">
                    {clients.map((d, i) => d.logo)}
                </Wrapper>
            </Section>
        </Animation>
    );
}

export default Clients;
