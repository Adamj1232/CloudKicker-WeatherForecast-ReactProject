import React, { Component } from 'react';
import weather from '../CurrentWeather'

export default class SearchField extends Component {
  constructor() {
    super()
    this.state = {
      inputCity:''
    }
  }

  grabArray(item) {
    console.log(item.current_observation.dewpoint_f)
  }

  render() {
    return (
      <div>
        <input type="input"/>
        <button>Enter City</button>
      </div>
    )
  }
}
