import React, { Component } from 'react';

const TenDayForecast = ({ weather }) => {

  if (!weather.length) {
    return (
      <div>

      </div>
    )
  }

  return (
    <section>
      <h1>10 Day forecast</h1>
      {weather[0].forecast.simpleforecast.forecastday.map((eachDay, index) => {
        return (
          <section key = {index}>
          <p>{eachDay.date.weekday_short}</p>
          <img src ={eachDay.icon_url.toString()} />
          <p>{eachDay.high.fahrenheit}°F  -  {eachDay.low.fahrenheit}°F</p>
          </section>
        );
      })}
    </section>
  )
}

export default TenDayForecast
