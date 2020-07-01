import React, { useContext } from 'react'
import { MouseContext } from '../../context/animations/MouseContext'
import useI18n from '../../hooks/use-i18n'
import { useRouter } from 'next/router'
import Chevron from '../icons/Chevron'

function Card ({ img, title, discipline, client, route }) {
	const i18n = useI18n()
	const mouse = useContext(MouseContext)
	const router = useRouter()

	const navigateTo = (route) => {
		router.push(`/portfolio/${route}`)
	}
	return (
		<div onClick={() => navigateTo(route)} onMouseOver={() => {mouse.onHover('projects')}}
			 onMouseLeave={() => {mouse.onLeave()}} className="card">
			<div className="image">
				<img src={img} alt="image"/>
				<Chevron/>
				<div className="card-text">
					<h5>{i18n.t(discipline)}</h5>
					<h4>{i18n.t(client)}</h4>
					<h3>{i18n.t(title)}</h3>
				</div>
			</div>
			{/*<div className="card-text">*/}
				{/*<h5>{i18n.t(discipline)}</h5>*/}
				{/*<h4>{i18n.t(client)}</h4>*/}
				{/*<h3>{i18n.t(title)}</h3>*/}
			{/*</div>*/}
		</div>
	)
}

export default Card
