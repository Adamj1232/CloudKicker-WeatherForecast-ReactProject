import React, { Component } from 'react';

 const CurrentWeather = ({ weather }) => {

   if(!weather.length) {
     return(
       <div id='open-statement'>
        <div>
          <h3>Welcome to CloudKicker</h3>
          <h3>Please enter a location</h3>
        </div>
       </div>
     )
   }

   return (
    <section id='current-weather-container'>
      <div id = 'current-inner-container'>
        <h1 className = 'current-condition-elements location'> {weather[0].current_observation.display_location.full}</h1>
        <h3 id='testDay' className = 'current-condition-elements'>{weather[0].forecast.txt_forecast.forecastday[0].title}</h3>
        <img className = 'current-condition-elements' src= {weather[0].current_observation.icon_url.toString()} />
        <h4 className = 'current-condition-elements'>Currently : {weather[0].current_observation.weather}</h4>
        <h1 className = 'current-condition-elements'>{weather[0].current_observation.temperature_string}</h1>
        <h3 className = 'current-condition-elements'>High:  {weather[0].forecast.simpleforecast.forecastday[0].high.fahrenheit}°F / Low: {weather[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}°F  </h3>
        <h4 className = 'current-condition-elements'> {weather[0].forecast.txt_forecast.forecastday[0].fcttext}</h4>
      </div>
    </section>
  )
}

 export default CurrentWeather
