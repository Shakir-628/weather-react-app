import React, { useState } from "react";
import "./index.css"
const api = {
  key: "96b1792502b530cc1fe59b7bbd4c0de9",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = evt => {
    debugger;
    if(evt.key === "Enter")
    {
      fetch(`${api.baseURL}weather?q=${query}&units=matric&APPID=${api.key}`)
      .then(res=> res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
    else
    {
      console.log('no result');
    }
  }

  const dateBuilder = (d) =>
  {
    let today = new Date().toDateString();
    return today;
  }
  
  return (
    <div className="App">
    <main>
      <div className="search-box">
      <input type="text" 
      className="search-bar" 
      onChange={e => setQuery(e.target.value)}
      value = {query}
      onKeyPress={search}
      placeholder="Search...">
      </input>
      </div>
      {(typeof weather.main != 'undefined') ? (
      <div>
      <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
