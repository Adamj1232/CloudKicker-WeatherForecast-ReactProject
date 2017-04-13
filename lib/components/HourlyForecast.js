import React, { Component } from 'react';

const HourlyForecast = ({ weather }) => {

  if(!weather.length) {
    return(
      <div>

      </div>
    )
  }

  console.log(weather[0].hourly_forecast)

  return(

    <section>
    {weather[0].hourly_forecast.map((forecast, index) => {

      while(index < 11){
      return (
        <section key = {index}>
        <p>{forecast.FCTTIME.civil}</p>
        <img src ={forecast.icon_url.toString()} />
        <p>{forecast.temp.english}°F</p>
        <p>Condition:{forecast.condition}</p>
        </section>
      )}
    })}
    </section>
    )
  }

export default HourlyForecast
