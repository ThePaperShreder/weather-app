import { weather_api_key, weather_api_url } from '../keys';
import cities from '../Header/Cities.json';

export async function getCurrentWeather(data) {
  const response = await fetch(weather_api_url + '/weather?' + new URLSearchParams({
    lat: cities[data.city].lat,
    lon: cities[data.city].lng,
    appid: weather_api_key
  }));

  return await response.json();
}