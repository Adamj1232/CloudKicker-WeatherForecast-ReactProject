import React, { Component } from 'react';

 const CurrentWeather = ({ weather }) => {

   if(!weather.length) {
     return(
       <div id='open-statement'>
        <div>
         Welcome to...please add location
        </div>
       </div>
     )
   }

   return (
    <section id='current-weather-container'>
    <div id = 'current-inner-container'>
      <h1 id='current-title'>Current Conditions</h1>
      <h3>{weather[0].forecast.txt_forecast.forecastday[0].title}</h3>
       <h4> {weather[0].current_observation.display_location.full}</h4>
       <img src= {weather[0].current_observation.icon_url.toString()} />
       <h5>{weather[0].current_observation.weather}</h5>
       <h1>{weather[0].current_observation.temperature_string}</h1>
       <h3>High:  {weather[0].forecast.simpleforecast.forecastday[0].high.fahrenheit}°F / Low: {weather[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}°F  </h3>
       <h5>Conditions: {weather[0].forecast.txt_forecast.forecastday[0].fcttext}</h5>
     </div>
    </section>
  )
 }
 // <h6>{currentWeather[0].current_observation.temp_c}°C</h6>

 export default CurrentWeather
