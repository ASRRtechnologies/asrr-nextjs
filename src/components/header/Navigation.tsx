import React from 'react';
import Header from "../utillities/header/Header";
import HeaderSection from "@/utillities/header/sub-components/HeaderSection";
import HeaderTab from "@/utillities/header/sub-components/HeaderTab";
import HeaderMenu from "@/utillities/header/sub-components/HeaderMenu";
import {Button} from "@/utillities/button";
import Logo from '../../components/header/Logo';

const headerLeft = (): React.ReactElement => {
    return (
        <HeaderSection>
            <HeaderTab>
                <Logo/>
            </HeaderTab>
        </HeaderSection>
    )
}

const headerCenter = (): React.ReactElement => {
    return (
        <HeaderSection>
            <HeaderTab>
                <Logo/>
            </HeaderTab>

            <HeaderTab>
                <HeaderMenu>
                    <Button type="navigation-button" text="contact" to="/contact" buttonStyle="text-only"/>
                </HeaderMenu>
            </HeaderTab>
        </HeaderSection>
    )
}

const headerRight = (): React.ReactElement => {
    return (
        <HeaderSection>
            <HeaderTab>
                <Logo/>
            </HeaderTab>

            <HeaderTab>
                <HeaderMenu>
                    <Button type="navigation-button" text="contact" to="/contact" buttonStyle="text-only"/>
                </HeaderMenu>
            </HeaderTab>
        </HeaderSection>
    )
}

function Navigation(props) {
    return (
            <Header style={{backgroundColor:"pink"}}
                    left={headerLeft()}
                    center={headerCenter()}
                    right={headerRight()}
            />
    );
}

export default Navigation;
