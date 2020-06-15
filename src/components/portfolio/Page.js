import React from 'react'
import phone from '#/clients/hes/landing.png'
import laptop from '#/clients/hes/result.png'
import laptop2 from '#/clients/hes/slider/image2.png'
import laptop3 from '#/clients/hes/slider/image3.png'
import Section from '../layout/Section'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import Animation from '../animation/Animation'
import Demo from './Demo'

const Landing = styled('div')`
      background-color: ${props => props.theme.portfolio.landing};
`

function Page (props) {

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,

	}

	return (
		<div className="portfolio-page">
			<Landing className="portfolio-page-landing">
				{/*<div className="portfolio-page-back"></div>*/}
				<div className="portfolio-page-landing-wrapper">
					<text>
						<Animation animation="fade-up" delay="300">
							<h2>Hes International</h2>
							<p>Trupo is a bold new way for people who work for themselves to get insurance benefits.
								Their
								experts are committed to providing each of their customers with a better sense of
								security
								and
								control by recommending the best insurance products for their individual needs. No
								upselling, no
								loopholes, just solutions.</p>
						</Animation>
					</text>
					<Animation animation="fade-up" delay="500">
						<img alt="image" src={phone}/>
					</Animation>.
				</div>
			</Landing>

			<section className="portfolio-page-work">
				<Section>
					<text>
						<Animation animation="fade-up" delay="300">
							<h2>The process</h2>
							<p>Trupo is a bold new way for people who work for themselves to get insurance benefits.
								Their
								experts are committed to providing each of their customers with a better sense of
								security
								and
								control by recommending the best insurance products for their individual needs. No
								upselling, no
								loopholes, just solutions.</p>
						</Animation>
					</text>
					<Animation animation="fade-up" delay="500">
						<Slider {...settings}>
							<div className="portfolio-page-slider-card no-margin">
								<img src={laptop2}/>
							</div>
							<div className="portfolio-page-slider-card">
								<img src={laptop3}/>
							</div>
							<div className="portfolio-page-slider-card">
								<img src={laptop2}/>
							</div>
						</Slider>
					</Animation>
				</Section>
			</section>

			<section className="portfolio-page-result">
				<Section>
					<text>
						<Animation animation="fade-up" delay="300">
							<h2>The Result</h2>
							<p>A very very very pretty design of these components It would make me jealous having
								something this pretty</p>
						</Animation>
					</text>
					<Animation animation="fade-up" delay="500">
						{/*<img src={laptop}/>*/}
						<Demo url="https://kind-aryabhata-bca490.netlify.com"/>
					</Animation>
				</Section>
			</section>

			<section className="portfolio-page-other-cases">
				<Section>
					<text>
						<Animation animation="fade-up" delay="300">
							<h2>Other Cases</h2>
						</Animation>
					</text>
					<Animation animation="fade-up" delay="500">
						<div className="portfolio-page-cases">
							<div></div>

						</div>
					</Animation>
				</Section>
			</section>

		</div>
	)
}

export default Page
