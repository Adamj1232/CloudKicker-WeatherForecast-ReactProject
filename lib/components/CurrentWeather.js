import React, { Component } from 'react';

const CurrentWeather = ({ weather }) => {

  if (!weather.length) {
    return (
       <div>
         Welcome to...please add location
       </div>
     )
   }

   return (
    <section>
    <h2>Current Conditions</h2>
    <h3>{weather[0].forecast.txt_forecast.forecastday[0].title}</h3>
     <h4> {weather[0].current_observation.display_location.full}</h4>
     <img src= {weather[0].current_observation.icon_url.toString()} />
     <h5>{weather[0].current_observation.weather}</h5>
     <h1> {weather[0].current_observation.temperature_string}</h1>
     <h3> High: {weather[0].forecast.simpleforecast.forecastday[0].high.fahrenheit}°F / Low: {weather[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}°F</h3>
     <h5>Conditions: {weather[0].forecast.txt_forecast.forecastday[0].fcttext}</h5>
    </section>
  )
 }

export default CurrentWeather
