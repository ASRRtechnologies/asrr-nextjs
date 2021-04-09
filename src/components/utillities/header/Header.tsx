import React, {ReactElement} from 'react';
import {HeaderComponent, HeaderProps} from "@/utillities/header/types";
import NavigationButton from "@/utillities/button/sub-components/NavigationButton";
import ActionButton from "@/utillities/button/sub-components/ActionButton";
import Section from "@/utillities/section/Section";
import SubSection from "@/utillities/section/sub-components/SubSection";
import styled from "@emotion/styled";
import {AspectRatioComponent} from "@/utillities/aspect-ratio/types";

const StyledHeader = styled(SubSection)`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

function Header(props: HeaderProps) {

    const renderHeaderComponents = (test: HeaderComponent): ReactElement => {
        return (
            <div>
                {test !== null && test !== undefined && test}
            </div>
        )
    }

    return (
        <Section padding={false} {...props}>
            <StyledHeader maxWidth={true}>
                {renderHeaderComponents(props.left)}
                {renderHeaderComponents(props.center)}
                {renderHeaderComponents(props.right)}
            </StyledHeader>
        </Section>
    );
}

export default Header;
