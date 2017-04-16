import React, { Component } from 'react';

const CardHourly = ({ weatherForCard }) => {
  return (
    <section>
    {weatherForCard[0].hourly_forecast.map((forecast, index) => {
      while (index < 10) {
        return (
        <table id='card-hourly' key = {index}>
          <thead>
          <tr>
          <td>{forecast.FCTTIME.civil}</td>
          <th><img src ={forecast.icon_url.toString()} /></th>
          </tr>
            <tr>
              <th>{forecast.temp.english}°F</th>
              <th>{forecast.condition}</th>
            </tr>
          </thead>
        </table>
      ); }
    })}
    </section>
  );
};

export default CardHourly;
