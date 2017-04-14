import React, { Component } from 'react';

const CardTenDay = ({ cardForWeather }) => {

  return (
    <section>
      {cardForWeather[0].forecast.simpleforecast.forecastday.map((eachDay, index) => {
        return (
          <table id='card-tenday' key = {index}>
            <thead>
              <tr>
                <th> { eachDay.date.weekday_short } </th>
                <th><img src ={eachDay.icon_url.toString()} /></th>
                <th> { eachDay.high.fahrenheit }°F  -
                    { eachDay.low.fahrenheit }°F </th>
              </tr>
            </thead>
          </table>
        );
      })}
    </section>
  );
};

export default CardTenDay;
