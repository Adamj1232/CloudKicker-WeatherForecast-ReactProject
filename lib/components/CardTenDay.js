import React, { Component } from 'react';

const CardTenDay = ({ cardForWeather }) => {

  return (
    <section>
      {cardForWeather[0].forecast.simpleforecast.forecastday.map((eachDay, index) => {
        return (
          <table id='card-tenday' key = {index}>
                <tbody>
                <tr>
                <td> { eachDay.date.weekday_short } </td>
                <td><img src ={eachDay.icon_url.toString()} /></td>
                <td> { eachDay.high.fahrenheit }°F  -
                    { eachDay.low.fahrenheit }°F </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </section>
  );
};

export default CardTenDay;
