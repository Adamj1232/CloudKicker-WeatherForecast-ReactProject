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
      <h1>Hourly Forecast</h1>
      <CardHourly weatherForCard ={weather}/>
    </section>
  );
};

export default HourlyForecast;
