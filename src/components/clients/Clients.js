import React from 'react';
import Landing from "@/landing/Landing"
import {clients} from "../../data/clients";
import styled from '@emotion/styled'
import Title from "@/text/Title";
import Section from "@/layout/Section";
import {previewServices} from "../../data/services";
import Card from "@/services/Card";
import ReadMore from "@/text/ReadMore";

const Wrapper = styled('section')`
        background-color: ${props => props.theme.section.clients}; 
        svg{
          path{
            fill:  ${props => props.theme.fonts.title}
          }
        }
`;


function Clients(props) {
    return (

        <Wrapper className="section-wrapper">
            <Title big title={'clients.title.header'}/>
            <div className="clients">
                {clients.map((d, i) => d.logo )}
            </div>
        </Wrapper>
    );
}

export default Clients;
