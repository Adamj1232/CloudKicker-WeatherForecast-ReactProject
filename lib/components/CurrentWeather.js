import React, { Component } from 'react';

 const CurrentWeather = ({ currentCity, currentWeather }) => {

   if(!currentWeather.length) {
     return(
       <div>
         Welcome to...please add location
       </div>
     )
   }

   return (
    <section>
    <h2>Current Conditions</h2>
     <h4> {currentCity}</h4>
     <img src= {currentWeather[0].icon_url.toString()} />
     <h1>{currentWeather[0].temp.english}°F</h1>
     <h6>{currentWeather[0].temp.metric}°C</h6>
     <h5>Conditions: {currentWeather[0].condition}</h5>
    </section>
  )
 }

 export default CurrentWeather
