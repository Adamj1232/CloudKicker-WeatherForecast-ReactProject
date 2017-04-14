import React, { Component } from 'react';

const CardTenDay = ({ cardForWeather }) => {

  return (
    <section>
      {cardForWeather[0].forecast.simpleforecast.forecastday.map((eachDay, index) => {
        return (
          <section id='card-tenday' key = {index}>
          <p> { eachDay.date.weekday_short } </p>
          <img src ={eachDay.icon_url.toString()} />
          <p> { eachDay.high.fahrenheit }°F  -
              { eachDay.low.fahrenheit }°F </p>
          </section>
        );
      })}
    </section>
  );
};

export default CardTenDay;
