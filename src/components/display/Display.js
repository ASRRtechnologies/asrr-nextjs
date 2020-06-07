import React from 'react'
import img from '../../../public/assets/images/landing/laptop.jpg'
import Section from '../layout/Section'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
`

function Display ({ image }) {
	return (
		<Wrapper className="section-wrapper display-wrapper">
			<Section>
				<div className="display">
					{/*<Title title={"Connecting everyone"} text="breath-taking"/>*/}
					<div className="image" style={{ backgroundImage: `url(${image})` }}>
						<img className="image" src={image}/>

					</div>
				</div>
			</Section>
		</Wrapper>
	)
}

export default Display
