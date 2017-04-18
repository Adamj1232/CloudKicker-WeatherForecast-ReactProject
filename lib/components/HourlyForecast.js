import React, { Component } from 'react';
import CardHourly from './CardHourly';

const HourlyForecast = ({ weather }) => {
  if (!weather.length) {
    return (
      <div>
      </div>
    );
  }
  return (
    <section id='hourly-container'>
      <div id = 'hourly-inner-container'>
        <h2>Hourly Forecast</h2>
        <CardHourly weatherForCard ={weather}/>
      </div>
    </section>
  );
};

export default HourlyForecast;
