import React, { Component } from 'react'
import { MouseContext } from '../../context/animations/MouseContext'

class Cursor extends Component {

	static contextType = MouseContext

	constructor (props) {
		super(props)
		this.mouseRef = React.createRef()
		this.mouseFollowRef = React.createRef()
		this.state = {
			cursor: 'cursor',
			cursorFollow: 'cursor-follow',
		}
	}

	moveFollowMouse = () => {
		document.addEventListener('mousemove', e => {
			setTimeout(() => {
				//Change style via ref instead of setting style property with state to limit rerender otherwise it will be laggy.
				this.mouseFollowRef.current.style.left = `${e.clientX}px`
				this.mouseFollowRef.current.style.top = `${e.clientY}px`
			}, 10)
		})

		document.addEventListener('mousedown', e => {
			this.setState({ cursorFollow: 'cursor-follow active' })
		})

		document.addEventListener('mouseup', e => {
			this.setState({ cursorFollow: 'cursor-follow' })
		})
	}

	moveMouse = () => {
		document.addEventListener('mousemove', e => {
			this.mouseRef.current.style.left = `${e.clientX}px`
			this.mouseRef.current.style.top = `${e.clientY}px`
		})

		document.addEventListener('mousedown', e => {
			this.setState({ cursor: 'cursor active' })
		})

		document.addEventListener('mouseup', e => {
			this.setState({ cursor: 'cursor' })
		})
	}

	renderText = (name) => {
		if (name === 'projects') {
			return <>
				<p>View Project</p>
			</>
		}
	}

	componentDidMount () {
		// this.moveFollowMouse()
		this.moveMouse()
	}

	render () {
		return (
			<MouseContext>
				{props => {
					return <>
						<div ref={this.mouseRef} className={`${this.state.cursor} ${props.mouse}`}>
							{this.renderText(props.mouse)}
						</div>
						{/*<div ref={this.mouseFollowRef} className={`${this.state.cursorFollow} ${props.mouse}`}></div>*/}
					</>
				}}
			</MouseContext>
		)
	}
}

export default Cursor
