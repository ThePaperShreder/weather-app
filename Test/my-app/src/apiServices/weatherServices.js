import cities from '../Header/Cities.json';

export async function getCurrentWeather(data) {
  return await get('weather', generateData(data));
}

export async function getForecastWeather(data) {
  return await get('forecast', generateData(data));
}

const generateData = (data) => {
  return {
    lat: cities[data.city].lat,
    lon: cities[data.city].lng,
    units: data.unit,
    lang: data.language,
    appid: process.env.REACT_APP_WEATHER_API_KEY
  };
}

const get = async function (endpoint, data) {
  const response = await fetch(process.env.REACT_APP_WEATHER_API_URL + `/${endpoint}?` + new URLSearchParams({
    ...data
  }));

  return await response.json();
}


// export async function getCurrentWeather(data) {
//   const response = await fetch(process.env.REACT_APP_WEATHER_API_URL + '/weather?' + new URLSearchParams({
//     lat: cities[data.city].lat,
//     lon: cities[data.city].lng,
//     units: data.unit,
//     lang: data.language,
//     appid: process.env.REACT_APP_WEATHER_API_KEY
//   }));

//   return await response.json();
// }

// export async function getForecastWeather(data) {
//   const response = await fetch(process.env.REACT_APP_WEATHER_API_URL + '/forecast?' + new URLSearchParams({
//     lat: cities[data.city].lat,
//     lon: cities[data.city].lng,
//     units: data.unit,
//     lang: data.language,
//     appid: process.env.REACT_APP_WEATHER_API_KEY
//   }));

//   return await response.json();
// }

