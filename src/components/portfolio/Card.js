import React, {useContext} from 'react'
import {MouseContext} from '../../context/animations/MouseContext'
import useI18n from '../../hooks/use-i18n'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import Animation from '@/animation/Animation'
import Link from "next/link";

const Wrapper = styled('div')`
        box-shadow: ${props => props.theme.card.shadow.portfolio};
`;

function Card({img, title, discipline, client, route, redirect}) {
    const i18n = useI18n();
    const mouse = useContext(MouseContext);
    const router = useRouter();
    const navigateTo = (route) => {
        if (redirect) {
            window.location.href = redirect
        } else {
            router.push(`/portfolio/case/${route}`)
        }
    };

    return (
        <Animation onMouseOver={() => {
            mouse.onHover('projects')
        }} onMouseLeave={() => {
            mouse.onLeave()
        }}
                   className="portfolio-card">
            <Link href={route}>
                <a className="portfolio-card-inner">
                    <Wrapper className="portfolio-card-image-wrapper">
                        <div className="portfolio-card-image">
                            <img src={img} alt="image"/>
                        </div>
                    </Wrapper>
                    <div className="card-text">
                        <h4>{i18n.t(discipline)}</h4>
                        <h3>{i18n.t(client)}</h3>
                        <p>{i18n.t(title)}</p>
                    </div>
                </a>
            </Link>
        </Animation>
    )
}

export default Card
