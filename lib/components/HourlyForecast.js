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
    <section>
      <CardHourly weatherForCard ={weather}/>
    </section>
  );
};

export default HourlyForecast;
