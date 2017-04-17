import React, { Component } from 'react';

const CardTenDay = ({ cardForWeather }) => {

  return (
    <section id='tenDay-test'>
      {cardForWeather[0].forecast.simpleforecast.forecastday.map((eachDay, index) => {
        return (
          <section id='card-tenday' key = {index}>
            <h3 className='ten-day'> { eachDay.date.weekday_short } </h3>
            <div><img src ={eachDay.icon_url.toString()} /></div>
            <h3 id ='high' className='ten-day'> { eachDay.high.fahrenheit }°F </h3>
            <h3 id='low' className='ten-day'> { eachDay.low.fahrenheit }°F </h3>
          </section>
        );
      })}
    </section>
  );
};

export default CardTenDay;
