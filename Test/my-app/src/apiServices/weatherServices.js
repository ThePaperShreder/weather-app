import { weather_api_key, weather_api_url } from '../keys';
import cities from '../Header/Cities.json';

//zapros na server na endpoint: weather kotorii otvechaet za tekushiu pogodu.
//async func  vipolnaetsa otdelno ot vsego. ona prednaznachena dlya togo chtobi 
//ves kod prodolzhal obrabativatsa ne ozhidaja otveta ot servera.
//glavnie kljuchi v async func eto 'async' i 'await'
//async pishitsa pered oboznacheniem func dlya togo chotobi oboznavhit chto eto za func js dvizhka.
//await pishetsa ne posredstvenno pered funk kotoraja budet vipolnjat zapros.
export async function getCurrentWeather(data) {
  //fetch func delaet zapros. zaprosi bivautdvuh tipov GET i POST.
  //frtch func prinimaet raznie parametri. mozhet prinimat kak string tak i object.
  //esli my peredali fetch string to on shetaet chto eto URL i nuzhno delat GET zaproos.
  // a esli object to zavisit ot nastroek kotorih mi zadadim.

  //URLSearchParams eto class kotorii pomogaet nam rabotat s parametrami.
  //kotorie budut peredani v fetch.
  //delaet iz objecta string s URL formatom "ssilkoi".
  //URLSearchParams - danii objekt vidast : "lat=54.33&lon=36.55&units=metric&appid=jg348g".

  // fetch poluchaet sleduushii string:https://api.openweathermap.org/data/2.5/weather?lat=54.33&lon=36.55&units=metric&appid=jg348g

  const response = await fetch(weather_api_url + '/weather?' + new URLSearchParams({
    lat: cities[data.city].lat,
    lon: cities[data.city].lng,
    units: data.unit,
    lang: data.language,
    appid: weather_api_key
  }));
  //dozhidaemsa otveta s servera i vsjo parsim v object.
  //.json() = JSON.parse(js_string);

  return await response.json();
}

export async function getForecastWeather(data) {
  const response = await fetch(weather_api_url + '/forecast?' + new URLSearchParams({
    lat: cities[data.city].lat,
    lon: cities[data.city].lng,
    units: data.unit,
    lang: data.language,
    appid: weather_api_key
  }));

  return await response.json();
}

