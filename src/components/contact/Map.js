import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import logo from 'public/assets/images/logo/asrr-logo-spacing-small.svg';
import logoWhite from 'public/assets/images/logo/asrr-logo-spacing-small-white.svg';
import { useTheme } from '../../context/theme/ThemeContext';
import mapStyles from './mapStyles';

const center = {
  lat: 52.011250, lng: 4.286770
};

function Map(props) {
  const darkTheme = useTheme();

  return (
    <>
      <LoadScript googleMapsApiKey='AIzaSyBMpKvbhfxhLV_S2t7zgHAZvlCyUKO8jwU'>
        <GoogleMap center={center} zoom={15} mapContainerClassName='map'
                   options={{ styles: darkTheme.dark ? mapStyles.dark : mapStyles.light }}>
          <>
            <Marker icon={darkTheme.dark ? logoWhite : logo} position={center} />
          </>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default Map;
