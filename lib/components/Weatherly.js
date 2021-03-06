import React, { Component } from 'react';
import SearchField from './SearchField';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import TenDayForecast from './TenDayForecast';
import apiKey from '../apiKey';
import $ from 'jquery';


export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
    };
  }

  handleClick(location) {
    const cityState = location.split(', ');
    const api = `https://api.wunderground.com/api/${apiKey}/forecast/hourly/forecast10day/conditions/q/${cityState[1]}/${cityState[0]}.json`;

    localStorage.setItem('storedLocation', location);

    $.get(api).then((jsonObj) => {
      this.setState({ weather: [jsonObj] });
    }).catch(() => {
      alert('Please seperate City and State with Comma. If outside the US substitute state with Country');
    });
  }

  render() {
    return (
      <div id='main'>
        <header id='header'>
          <span className='logo'></span>
          <SearchField className='test-search' handleClick = {this.handleClick.bind(this)}/>
        </header>
        <div id='hourly-tenday-container'>
          <section id='stacked'>
            <CurrentWeather weather = {this.state.weather}/>
            <TenDayForecast weather = {this.state.weather}/>
          </section>
          <HourlyForecast weather = {this.state.weather}/>
        </div>
      </div>
    );
  }
}
