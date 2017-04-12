import React, { Component } from 'react';
import SearchField from './SearchField'
import weather from '../CurrentWeather'

export default class Weatherly extends Component {
  constructor() {
    super()
    this.state = {
      currentCity: '',
    }
  }

  handleClick(item) {
    // const inputCity = Object.assign(item, {id: Date.now()})

    this.setState({
      currentCity: item.inputCity
    })
  }

  render() {
    return (
      <div>
        <h1>Weatherly</h1>
        <SearchField handleClick = {this.handleClick.bind(this)}/>
      </div>
    )
  }
}
