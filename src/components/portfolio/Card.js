import React, { useContext } from 'react'
import { MouseContext } from '../../context/animations/MouseContext'
import useI18n from '../../hooks/use-i18n'

function Card ({ img, title, discipline, client }) {
	const i18n = useI18n()
	const mouse = useContext(MouseContext)
	return (
		<div onMouseOver={() => {mouse.onHover('projects')}} onMouseLeave={() => {mouse.onLeave()}} className="card">
			<div className="image">
				<img src={img} alt="image"/>
			</div>
			<h5>{i18n.t(discipline)}</h5>
			<h4>{i18n.t(client)}</h4>
			<h3>{i18n.t(title)}</h3>
		</div>
	)
}

export default Card
