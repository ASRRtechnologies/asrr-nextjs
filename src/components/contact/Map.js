import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import logo from 'public/assets/images/logo/asrr-logo-spacing-small.svg'
import logoWhite from 'public/assets/images/logo/asrr-logo-spacing-small-white.svg'
import { useTheme } from '../../context/theme/ThemeContext'

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 52.040703, lng: 4.336644,
};

const position = {
	lat: 52.040703, lng: 4.336644,
};

const icon = {
	lat: 52.038003, lng: 4.336644,
};

function Map (props) {
	const darkTheme = useTheme();

	return (
		<>
			<LoadScript googleMapsApiKey="AIzaSyCSfB3HhJXkskqLOKlqaiSY3NK4VxlSjQQ">
				<GoogleMap center={center} zoom={15} mapContainerClassName="map">
					<>
						<Marker icon={darkTheme.dark ? logoWhite : logo} position={position}/>
					</>
				</GoogleMap>
			</LoadScript>
		</>
	)
}

export default Map
