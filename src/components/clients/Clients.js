import React from 'react';
import Landing from "@/landing/Landing"
import {clients} from "@/data/clients";
import styled from '@emotion/styled'

const Wrapper = styled('section')`
        background-color: ${props => props.theme.clients}; `;


function Clients(props) {
    return (
            <Wrapper className="clients">
                {clients.map((d, i) => <img key={d.alt + i} src={d.image} alt={d.alt}/>)}
            </Wrapper>
    );
}

export default Clients;
