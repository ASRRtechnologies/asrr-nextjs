import React from 'react'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import logo from "#/logo/asrr-logo-spacing-white.svg"
import styled from "@emotion/styled";
import useI18n from "../../hooks/use-i18n";

const Wrapper = styled('section')`background-color: ${props => props.theme.footer};`;

function Footer (props) {
    const i18n = useI18n();
    return (
        <Wrapper className="layout footer-container">

            <div className="footer">
                <img src={logo}/>

                <div className="container">
                    <div className="grid">
                        <h3>{i18n.t("footer.navigation")}</h3>
                        <ReadMore inverted small to="/">{i18n.t("header.home")}</ReadMore>
                        <ReadMore inverted small to="/portfolio">{i18n.t("header.portfolio")}</ReadMore>
                        <ReadMore inverted small to="/services">{i18n.t("header.services")}</ReadMore>
                        <ReadMore inverted small to="/hire">{i18n.t("header.hire")}</ReadMore>
                        <ReadMore inverted small to="/about">{i18n.t("header.about")}</ReadMore>
                        <ReadMore inverted small to="/contact">{i18n.t("header.contact")}</ReadMore>
                    </div>

                    <div className="grid">
                        <h3>Information</h3>
                        <ReadMore inverted small to="/">{i18n.t("footer.faq")}</ReadMore>
                        <ReadMore inverted small to="/">{i18n.t("footer.privacy")}</ReadMore>
                        <ReadMore inverted small to="/">{i18n.t("footer.policy")}</ReadMore>
                    </div>

                    <div className="grid address">
                        <h3>{i18n.t("footer.address")}</h3>
                        <p>ASRR Tech</p>
                        <p>Veraartlaan 12 - 2248 PE Rijswijk</p>
                        <p>contact@asrr.nl</p>
                        <p>Volg ons op</p>
                    </div>

                    <div className="grid newsletter">
                        <h3>{i18n.t("footer.letter")}</h3>
                        <form>
                            <Input className="full-width"  button={i18n.t("buttons.submit")} placeholder={i18n.t("contact.form.email.placeholder")}/>
                            {/*<ReadMore small action>{i18n.t("buttons.submit")}</ReadMore>*/}
                        </form>
                    </div>
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
