import React from 'react';
import {GoogleMap, LoadScript, InfoWindow, Marker} from '@react-google-maps/api';
import logo from "public/assets/images/logo/asrr-logo-spacing-small.svg";

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 52.040703, lng: 4.336644
};

const position = {
    lat: 52.040703, lng: 4.336644
};

const icon = {
    lat: 52.038003, lng: 4.336644
};


function Map(props) {


    return (
        <>
            <LoadScript
                googleMapsApiKey="AIzaSyCSfB3HhJXkskqLOKlqaiSY3NK4VxlSjQQ"
            >
                <GoogleMap center={center} zoom={10} mapContainerClassName="map">
                    <>
                        <Marker icon={logo} position={position}/>
                        {/*<InfoWindow anchor={position} position={position}>*/}
                        {/*    <div>*/}
                        {/*        <h3>Get Directions</h3>*/}
                        {/*    </div>*/}
                        {/*</InfoWindow>*/}
                    </>
                </GoogleMap>
            </LoadScript>
            <p>Adress: Veraartlaan 12</p>
            <p>Email: contact@asrr.nl</p>
            <a className="link">Get Directions</a>
        </>
    );
}

export default Map;