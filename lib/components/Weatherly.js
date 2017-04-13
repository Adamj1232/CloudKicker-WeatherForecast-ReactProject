import React, { Component } from 'react';
import SearchField from './SearchField'
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast'
import TenDayForecast from './TenDayForecast'
import $ from 'jquery'


export default class Weatherly extends Component {
  constructor() {
    super()
    this.state = {
      weather: []
    }
  }

  handleClick(location) {
    let api = `http://api.wunderground.com/api/bf0b8a6ac19ed8ff/forecast/hourly/forecast10day/conditions/q/CO/${location.inputCity}.json`;

    // let api = testWeather

    $.get(api).then((jsonObj) => {
      this.setState({ weather: [jsonObj] })
    })

    // console.log(this.state.weather)

  }

  render() {
    return (
      <div>
        <h1>Weatherly</h1>
        <img src='../images/Cloudkicker_logo.png'/>
        <SearchField handleClick = {this.handleClick.bind(this)}/>
        <CurrentWeather weather = {this.state.weather}/>
        <HourlyForecast weather = {this.state.weather}/>
        <TenDayForecast weather = {this.state.weather}/>
      </div>
    )
  }
}
