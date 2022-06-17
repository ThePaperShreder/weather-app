import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import MapComponent from './MapComponent';
import { getForecastWeather } from '../apiServices/weatherServices';

export default function ForecastComponent(props) {

  const [weather, setWeather] = useState(null);

  const get = () => {
    getForecastWeather(props.form || props.cookie)
      .then((response) => {
        setWeather(response);
        console.log('response', response);
      })
      .catch((error) => {
        console.error('Error in api call', error);
      });
  }

  useEffect(() => {
    if (!props.form || props.cookie) {
      get();
    }
  }, [props.form]);


  return (
    <>
      {/* <DataComponent {...props} weather={weather} /> */}
      {/* {weather && (<MapComponent {...props} weather={weather} />)} */}
    </>
  )
}