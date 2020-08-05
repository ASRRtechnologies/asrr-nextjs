import React, {useState} from 'react'
import useI18n from '../../hooks/use-i18n'
import Section from "@/layout/Section";
import styled from "@emotion/styled";
import {useTheme} from "../../context/theme/ThemeContext";
import ReadMore from "@/text/ReadMore";
import Title from "@/text/Title";
import Email from "@/icons/Email";
import Button from "@/Button";

const Wrapper = styled('div')`
      // background-color: ${props => props.theme.home.contact};
`;

function Why() {

    const darkmode = useTheme().dark;
    const [card, setCard] = useState(0);
    const i18n = useI18n();
    const values = ["Cheap", "Fast", "Agile"];

    return (
        <Wrapper className={`section-wrapper`}>
            <Section>
                <Title title={'why.title.header'}/>
                <div className="why-asrr">
                    <div className="why-asrr-points">
                        {values.map((d, i) => <span onClick={() => setCard(i)} className={`${i === card && "selected-line"}`}><p>{d}</p></span>)}
                    </div>

                    <div className="why-asrr-text">
                        {card === 0 ? <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</p> : null}
                        {card === 1 ? <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. o ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</p> : null}
                        {card === 2 ? <p>Lorem ipsum dolor sit amet, consectetupenatibus et magnis dultricies nec, pellentesque eu,</p> : null}
                    </div>
                </div>
            </Section>
        </Wrapper>
    )
}

export default Why


