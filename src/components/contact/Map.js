import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import logo from 'public/assets/images/logo/asrr-logo-spacing-small.svg'

const containerStyle = {
	width: '100%',
	height: '100%',
}

const center = {
	lat: 52.040703, lng: 4.336644,
}

const position = {
	lat: 52.040703, lng: 4.336644,
}

const icon = {
	lat: 52.038003, lng: 4.336644,
}

function Map (props) {

	return (
		<>
			<LoadScript googleMapsApiKey="AIzaSyCSfB3HhJXkskqLOKlqaiSY3NK4VxlSjQQ">
				<GoogleMap center={center} zoom={15} mapContainerClassName="map">
					<>
						<Marker icon={logo} position={position}/>
					</>
				</GoogleMap>
			</LoadScript>
			<div className="text">
				<p>Adress: Veraartlaan 12 <br/> 2288 GM Rijswijk, The Netherlands</p>
				<a href="mailto:asrr@contact.nl" target="_blank" rel="noopener noreferrer" className="link">Email: contact@asrr.nl</a>
				<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7" className="link no-margin">Get Directions</a>
			</div>
		</>
	)
}

export default Map
