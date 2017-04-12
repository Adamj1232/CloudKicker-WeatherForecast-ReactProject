import React, { Component } from 'react';
import weather from '../CurrentWeather'

export default class SearchField extends Component {
  constructor() {
    super()
    this.state = {
      inputCity: '',
    }
  }

  selectCity() {
    this.props.handleClick(this.state)
    this.setState({ inputCity: '' })
  }


  render() {
    return (
      <div>
        <input type="input"
              placeholder="Enter Zip Code"
              value={this.state.inputCity}
              onChange={(event) => {this.setState({ inputCity: event.target.value })}}
              />
        <button onClick = {this.selectCity.bind(this)}> Submit </button>
      </div>
    )
  }
}
