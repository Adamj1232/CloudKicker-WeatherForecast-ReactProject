import React, { Component } from 'react';
import CardTenDay from './CardTenDay';

const TenDayForecast = ({ weather }) => {
  if (!weather.length) {
    return (
      <div>
      </div>
    );
  }

  return (
    <section id='tenday-container'>
      <div id='tenday-inner-container'>
        <h1>10 Day forecast</h1>
        <CardTenDay cardForWeather={weather}/>
      </div>
    </section>
  );
};

export default TenDayForecast;
