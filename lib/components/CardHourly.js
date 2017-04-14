import React, { Component } from 'react';

const CardHourly = ({ weatherForCard }) => {
  return (
    <section>
    {weatherForCard[0].hourly_forecast.map((forecast, index) => {
      while (index < 10) {
        return (
        <section id='card-hourly' key = {index}>
        <p>{forecast.FCTTIME.civil}</p>
        <img src ={forecast.icon_url.toString()} />
        <p>{forecast.temp.english}°F</p>
        <p>Condition: {forecast.condition}</p>
        </section>
      ); }
    })}
    </section>
  );
};

export default CardHourly;
