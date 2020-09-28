import React from 'react'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import logo from "#/logo/asrr-logo-spacing-white.svg"
import styled from "@emotion/styled";
import useI18n from "../../hooks/use-i18n";
import LinkedIn from "@/icons/LinkedIn";
import Facebook from "@/icons/Facebook";

const Wrapper = styled('section')`background-color: ${props => props.theme.footer};`;

function Footer (props) {
    const i18n = useI18n();
    return (
        <Wrapper className="layout footer-container">

            <div className="footer">
                <img src={logo}/>

                <div className="footer-navigation">
                    <div className="grid">
                        <h3>{i18n.t("footer.navigation")}</h3>
                        <ReadMore inverted small to="/">{i18n.t("header.home")}</ReadMore>
                        <ReadMore inverted small to="/portfolio">{i18n.t("header.case")}</ReadMore>
                        <ReadMore inverted small to="/services">{i18n.t("header.services")}</ReadMore>
                        {/*<ReadMore inverted small to="/hire">{i18n.t("header.hire")}</ReadMore>*/}
                        <ReadMore inverted small to="/about">{i18n.t("header.about")}</ReadMore>
                        <ReadMore inverted small to="/contact">{i18n.t("header.contact")}</ReadMore>
                    </div>

                    <div className="grid">
                        <h3>Information</h3>
                        <ReadMore inverted small to="/">{i18n.t("footer.faq")}</ReadMore>
                        <ReadMore inverted small to="/">{i18n.t("footer.privacy")}</ReadMore>
                        <ReadMore inverted small to="/">{i18n.t("footer.policy")}</ReadMore>
                    </div>

                    <div className="grid">
                        <h3>{i18n.t("footer.address")}</h3>
                        <p>ASRR Tech</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7" className="animated-link-light">2288 GM Rijswijk, The Netherlands</a>
                        <a href="mailto:asrr@contact.nl" target="_blank" rel="noopener noreferrer" className="animated-link-light">contact@asrr.nl</a>
                    </div>

                    <div className="grid">
                        <h3>{i18n.t("footer.social_media")}</h3>
                        <div className="footer-social-media">
                            <a><LinkedIn/></a>
                            <a><Facebook/></a>
                        </div>
                    </div>


                </div>

                <div className="footer-newsletter">
                    <h3>{i18n.t("footer.letter")}</h3>
                    <form>
                        <Input className="full-width"  button={i18n.t("buttons.submit")} placeholder={i18n.t("contact.form.email.placeholder")}/>
                        {/*<ReadMore small action>{i18n.t("buttons.submit")}</ReadMore>*/}
                    </form>
                </div>

                <div className="bottom">
                    <p>Copyright ASRR</p>
                    <p>{i18n.t("footer.design")}</p>
                </div>

            </div>

        </Wrapper>
    )
}

export default Footer
