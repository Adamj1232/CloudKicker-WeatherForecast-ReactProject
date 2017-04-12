import React, { Component } from 'react';
import SearchField from './SearchField'
import CurrentWeather from './CurrentWeather'
import $ from 'jquery'


export default class Weatherly extends Component {
  constructor() {
    super()
    this.state = {
      weather: []
    }
  }

  handleClick(location) {
    let api = `http://api.wunderground.com/api/bf0b8a6ac19ed8ff/conditions/q/CO/${location.inputCity}.json`;

    // let api = testWeather

    // console.log(api)
    $.get(api).then((jsonObj) => {
      this.setState({ weather: [jsonObj.current_observation] })
    })

    // console.log(this.state.weather)

  }

  render() {
    return (
      <div>
        <h1>Weatherly</h1>
        <SearchField handleClick = {this.handleClick.bind(this)}/>
        <CurrentWeather currentState = {this.state.weather}/>
      </div>
    )
  }
}
