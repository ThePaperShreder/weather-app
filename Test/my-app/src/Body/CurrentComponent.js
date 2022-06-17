import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import MapComponent from './MapComponent';
import { getCurrentWeather } from '../apiServices/weatherServices';
import { useParams } from 'react-router-dom';

export default function CurrentComponent (props) {

  const [ weather, setWeather ] = useState(null);

  //Dlya togo chtobi poluchit parametri vbitie v ssilku posle ?
  //ispollzuetsa hook ?
  // kotorii pri nalichii parametra naznachaet peremennuu objekta s kljuchom i znacheniem {city: "tallinn"}
  //usParams ne svjazon s sostojaniem component
  const params = useParams();

  const get = () => {
    const data = props.form || props.cookie;

    if(params.city) {
      data.city = params.city;
    }
//getCurrentWeather vozrashaet nam promise
//chtobi obrabotat otvet s promisa mi ispolzuem .then() v kotoruu propisivaem callback func.
//callback func prinimaet kak argument to chto mi vernuli s async func "return await response.json".
//then zapuskaetsa kogda promise vernul pozitivnii otvet (resolve).

    getCurrentWeather(data)
    .then((response) => {
       setWeather(response);
      console.log('response', response);
    })
    //catch chast async func kotoraja zapuskaetsa pri nalichii oshibki vo
    // vsei strukture i pri otvete (reject).
    //catch zapustitsa esli v getCurrentWeather budet oshibka i esli v .then oshibka.

    .catch((error) => {
      console.error('Error in api call', error);
    });
  }


  //ueEffect mozhet sledit za izmenenijami peremennih kotorie bili peredanni emu 
  //eto nazivaut dependecy 
  //ih mozhet bit neskolko. peredaem vvide massiva.
  // pri izmeninii v zavisimostjah zapusaketsa func vnutri useEffect.
  
  useEffect(() => {
    if(!props.form || props.cookie) {
    get();
    }
  }, [props.form, params]);
  

    return (
        <>
          <DataComponent {...props} weather={weather} />
          {weather && (<MapComponent {...props} weather={weather} />)}
        </>
    )
}