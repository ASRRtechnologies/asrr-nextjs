import React from 'react';
import ReadMore from "../utillities/text/ReadMore";
import useI18n from "../../hooks/use-i18n";
import styled from "@emotion/styled";
import t from "../../hooks/translator";

const Wrapper = styled("div")`
        background: ${props => props.theme.card.background};
        box-shadow: ${props => props.theme.card.shadow};
`;

const Card = ({image, basePath, paragraphs, route}) => {
    let title = `${basePath}.title`;

    const i18n = useI18n();
    return (
        <Wrapper className="service-card">
            <div className="service-card-text">
                <div className="service-card-text-wrapper">
					<span>
						{title && <h1 className="subheader">{i18n.t(title) !== undefined ? i18n.t(title) : title}</h1>}

                        {[...Array(paragraphs)].map((x, i) => {
                                let text = `${basePath}.paragraphs.${i}`;
                                return <p className="text">{t(text)}</p>
                            }
                        )}
                        <ReadMore noAnimation className="text" to={`/services${route}`} text="buttons.read"/>
					</span>
                </div>
            </div>

            <div className="service-card-image">
                <div className="service-card-image-wrapper">
                    <img src={image} alt="services-alt"/>
                </div>
            </div>
        </Wrapper>
    );
};

export default Card;
