import React from 'react'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import logo from "#/logo/asrr-logo-spacing-white.svg"
import styled from "@emotion/styled";


const Wrapper = styled('section')`
        background-color: ${props => props.theme.footer};
        `;

function Footer (props) {
    return (
        <Wrapper className="layout footer-container">
            <div className="footer">
                <img src={logo}/>
                <div className="container">

                    <div className="grid">
                        <h4>Navigation</h4>
                        <ReadMore inverted small to="/">Home</ReadMore>
                        <ReadMore inverted small to="/">Services</ReadMore>
                        <ReadMore inverted small to="/">Projects</ReadMore>
                        <ReadMore inverted small to="/">About us</ReadMore>
                        <ReadMore inverted small to="/">Contact</ReadMore>
                    </div>

                    <div className="grid">
                        <h4>Information</h4>
                        <ReadMore inverted small to="/">FAQ</ReadMore>
                        <ReadMore inverted small to="/">Privacy</ReadMore>
                        <ReadMore inverted small to="/">Policy</ReadMore>
                    </div>

                    <div className="grid address">
                        <h4>Organization</h4>
                        <p>ASRR Tech</p>
                        <p>Veraartlaan 12 - 2248 PE Rijswijk</p>
                        <p>contact@asrr.nl</p>
                        <p>Volg ons op</p>
                    </div>

                    <div className="grid newsletter">
                        <h4>Sign up for our newsletter</h4>
                        <form>
                            <Input className="full-width" placeholder="Email"/>
                            <ReadMore small action text="Submit"/>
                        </form>
                    </div>

                </div>
                <div className="bottom">
                    <p>Copyright ASRR</p>
                    <p>Designed by ASRR Tech</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer
