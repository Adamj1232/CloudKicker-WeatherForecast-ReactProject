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
    <section>
      <h1>10 Day forecast</h1>
      <CardTenDay cardForWeather={weather}/>
    </section>
  );
};

export default TenDayForecast;
