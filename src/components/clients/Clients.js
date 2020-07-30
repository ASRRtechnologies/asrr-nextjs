import React from 'react';
import {clients} from "../../data/clients";
import styled from '@emotion/styled'
import Title from "@/text/Title";

const Wrapper = styled('section')`
        background-color: ${props => props.theme.home.clients}; 
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
