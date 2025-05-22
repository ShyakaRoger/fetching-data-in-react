import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import * as weatherService from './services/weatherService';

import WeatherSearch from './components/WeatherSearch/WeatherSearch';

import WeatherDetails from './components/WeatherDetails/WeatherDetails';



function App() {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    console.log('Data:', data);
    const newWeatherState = {
  location: data.location.name,
  temperature: data.current.temp_f,
  condition: data.current.condition.text,
   };

   setWeather(newWeatherState);

   useEffect(() => {

    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };

      fetchDefaultData();

    }, []);



  };
  const [count, setCount] = useState(0)

  return (
   <main>
    <h1>Weather API</h1>
    <WeatherSearch fetchData={fetchData} />
    <WeatherDetails weather={weather} />
  </main>
  );
}

export default App
