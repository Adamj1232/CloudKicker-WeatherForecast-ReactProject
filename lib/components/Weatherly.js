import React, { Component } from 'react';
import SearchField from './SearchField'
import weather from '../CurrentWeather'

export default class Weatherly extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Weatherly</h1>
        <SearchField />
      </div>
    )
  }
}
