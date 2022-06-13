import React from "react";
import { Container } from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {google_api_key} from '../keys';
import cities from "../Header/Cities.json";


const containerStyle = {
    height: '400px',
  };
  

export default function MapComponent (props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: google_api_key
      });
      const center = {
        lat: props.weather.coord.lat,
        lng: props.weather.coord.lon
      };
    return (
        <Container className="mt-3">
            {isLoaded ? (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
                </GoogleMap>
            ) : <></>}
        </Container>
    )
}