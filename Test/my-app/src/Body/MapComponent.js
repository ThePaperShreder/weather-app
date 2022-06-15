import React from "react";
import { Container } from "react-bootstrap";
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
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
        lng: props.weather.coord.lon,
      };
    return (
        <>
            {isLoaded &&(
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                >
                    <InfoWindow position={center}>                     
                      <div style={{ backgroundColor: 'white', opacity: 0.55, padding: 6 }}>
                        <div style={{ fontSize: 20, fontColor: `#e0cad0` }}>
                          {props.weather.main.temp}
                        </div>
                      </div>
                    </InfoWindow>           
                </GoogleMap>
            )}
        </>
    )
}