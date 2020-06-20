import React from 'react';
import Landing from "@/landing/Landing"
import {cases, clients} from "../../data/cases";
import styled from '@emotion/styled'

const Wrapper = styled('section')`
        background-color: ${props => props.theme.section.clients}; `;


function Clients(props) {
    return (
            <Wrapper className="clients">
                {clients.map((d, i) => <img key={d.alt + i} src={d.image} alt={d.alt}/>)}
            </Wrapper>
    );
}

export default Clients;
