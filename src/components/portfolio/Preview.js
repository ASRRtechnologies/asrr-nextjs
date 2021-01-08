import React, { useEffect, useState } from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import { portfolio } from '../../data/portfolio'
import ReadMore from '@/text/ReadMore'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import useI18n from '../../hooks/use-i18n'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.portfolio};
`

function Portfolio ({ data, basePath }) {

	const [cases, setCases] = useState([])
	const i18n = useI18n()

	useEffect(() => {
		setCases(portfolio.slice(0, 3))
	}, [])

	return (
		<Wrapper>
			{console.log(data)}

			<Title title={data.title} header={data.header} subHeader={data.subheader}/>

			{/*<div className="portfolio">*/}

			{/*    {cases.map(({image, id, type, href}, i) => {*/}

			{/*        return (*/}
			{/*            <Fade delay={200} bottom>*/}
			{/*                <div className="portfolio-card card-margin-bottom">*/}
			{/*                    <Link href={`/portfolio/case/${id}`}>*/}
			{/*                        <a className="portfolio-card-inner">*/}
			{/*                            <Card className="portfolio-card-image-wrapper">*/}
			{/*                                <div className="portfolio-card-image">*/}
			{/*                                    <img src={image} alt="image"/>*/}
			{/*                                </div>*/}
			{/*                            </Card>*/}
			{/*                            <div className="portfolio-card-text">*/}
			{/*                                <h1 className="label-small-margin">{t(`cases.${id}.content.smallTitle`)}</h1>*/}
			{/*                                <h2 className="subheader">{t(`cases.${id}.content.title`)}</h2>*/}
			{/*                                <p className="text">{t(`cases.${id}.content.subtitle`)}</p>*/}
			{/*                            </div>*/}
			{/*                        </a>*/}
			{/*                    </Link>*/}
			{/*                </div>*/}
			{/*            </Fade>*/}
			{/*        )*/}
			{/*    })}*/}
			{/*</div>*/}

			<div className="cards-container">

				{cases.map(({ image, id, type, href }, i) => {

					return (
						<Fade delay={200} bottom>
							<Link href={`/portfolio/case/${id}`}>
								<a>
									<div className="card">
										<div className="card-image">
											<img src={image} alt="image"/>
										</div>

										<div className="card-text-container">
											<div className="card-text">
												<h1 className="font-card-header">WEB DEVELOPMENT</h1>
												<h2 className="font-card-title">Building a web application</h2>
												<h3 className="font-general">Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Aspernatur corporis culpa dicta distinctio dolorem</h3>
											</div>

											<span>
												<h4>Form Architecture</h4>
												<h5>31 December 2020</h5>
											</span>
										</div>

									</div>
								</a>
							</Link>
						</Fade>
					)
				})}
			</div>

			<div className="read-more-wrapper">
				<ReadMore className="subheader" to="/portfolio" text={data.button}/>
			</div>

		</Wrapper>
	)
}

export default Portfolio

