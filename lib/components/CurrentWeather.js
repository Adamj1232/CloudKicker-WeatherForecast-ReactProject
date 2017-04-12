import React, { Component } from 'react';

 const CurrentWeather = ({ currentState }) => {

   if(!currentState.length) {
     return(
       <div>
         Welcome to...please add location
       </div>
     )
   }

   return (
    <section>
      <h4> {currentState[0].observation_location.full}</h4>
      <img src= {currentState[0].icon_url.toString()} />
      <h1>Feels Like f: {currentState[0].feelslike_f}</h1>
      <h6>Feels Like c: {currentState[0].feelslike_c}</h6>
      <h5>Wind Gusts: {currentState[0].wind_gust_mph}</h5>
    </section>
  )
 }
 // <img source={{ uri: currentState[0].icon_url }}/>

 export default CurrentWeather
