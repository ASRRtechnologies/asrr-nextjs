import React, {useContext} from 'react'
import {MouseContext} from '../../context/animations/MouseContext'
import useI18n from '../../hooks/use-i18n'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import Animation from '@/animation/Animation'
import Link from "next/link";

const Wrapper = styled('div')`
        box-shadow: ${props => props.theme.card.portfolio};
`;

function Card({img, title, discipline, client, route, redirect}) {
    const i18n = useI18n();

    return (
        <div className="portfolio-card card-margin-bottom">
            <Link href={route}>
                <a className="portfolio-card-inner">

                    <Wrapper className="portfolio-card-image-wrapper">
                        <div className="portfolio-card-image">
                            <img src={img} alt="image"/>
                        </div>
                    </Wrapper>
                    <div className="portfolio-card-text">
                        <h1 className="label-small-margin">{i18n.t(discipline)}</h1>
                        <h2 className="subheader">{i18n.t(client)}</h2>
                        <p className="text">{i18n.t(title)}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Card
