import React, { Component } from 'react';
import SearchField from './SearchField'
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast'
import TenDayForecast from './TenDayForecast'
import apiKey from '../apiKey'
import $ from 'jquery'


export default class Weatherly extends Component {
  constructor() {
    super()
    this.state = {
      weather: []
    }
  }

  handleClick(location) {
    const cityState = location.split(', ')
    let api = `http://api.wunderground.com/api/${apiKey}/forecast/hourly/forecast10day/conditions/q/${cityState[1]}/${cityState[0]}.json`;

    // let api = testWeather

    $.get(api).then((jsonObj) => {
      this.setState({ weather: [jsonObj] })
    }).catch(() => {
      alert('Please seperate City and State with Comma. If outside the US substitute state with Country')
    })

    // console.log(this.state.weather)

  }

  render() {
    return (
      <div>
        <h1>Weatherly</h1>
        <span className='logo'></span>
        <SearchField handleClick = {this.handleClick.bind(this)}/>
        <CurrentWeather weather = {this.state.weather}/>
        <HourlyForecast weather = {this.state.weather}/>
        <TenDayForecast weather = {this.state.weather}/>
      </div>
    )
  }
}
