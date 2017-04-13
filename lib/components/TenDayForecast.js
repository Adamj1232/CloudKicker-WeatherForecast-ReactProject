import React, { Component } from 'react';

const TenDayForecast = ({ weather }) => {

  if (!weather.length) {
    return (
      <div>

      </div>
    )
  }

  console.log(weather[0].forecast.simpleforecast.forecastday[0].date.weekday_short)

  return (
    <section>
      <h1>10 Day forecast</h1>
      {weather[0].forecast.simpleforecast.forecastday.map((eachDay, index) => {
        console.log(eachDay)
          return (
            <section key = {index}>
            <p>{eachDay.date.weekday_short}</p>
            <img src ={eachDay.icon_url.toString()} />
            <p>{eachDay.low.fahrenheit}°F  -  {eachDay.high.fahrenheit}°F</p>
            </section>
        );
      })}
    </section>
  )
}

export default TenDayForecast
