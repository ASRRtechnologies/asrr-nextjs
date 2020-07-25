import React from 'react';
import Landing from "@/landing/Landing"
import {cases, clients} from "../../data/cases";
import styled from '@emotion/styled'
import Title from "@/text/Title";
import Section from "@/layout/Section";
import {previewServices} from "../../data/services";
import Card from "@/services/Card";
import ReadMore from "@/text/ReadMore";

const Wrapper = styled('section')`
        background-color: ${props => props.theme.section.clients}; `;


function Clients(props) {
    return (

        <Wrapper className="section-wrapper clients-section">
                <Title big title={'clients.title.header'} text={'clients.title.text'}/>
                <div className="clients">
                    {clients.map((d, i) => <img key={d.alt + i} src={d.image} alt={d.alt}/>)}
                </div>
        </Wrapper>
    );
}

export default Clients;
