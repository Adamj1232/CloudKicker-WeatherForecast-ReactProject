import React, { Component } from 'react';
import weather from '../CurrentWeather'

export default class SearchField extends Component {
  constructor() {
    super()
    this.state = {
      inputCity: '',
    }
  }

  componentDidMount() {
    let storedLocationKey = localStorage.getItem('storedLocation')

    this.setState({ inputCity: storedLocationKey ? storedLocationKey : '' }, () => {
      this.props.handleClick(this.state.inputCity)
      this.setState({ inputCity: '' })
    })
  }

  selectCity() {
    this.props.handleClick(this.state.inputCity)
    this.setState({ inputCity: '' })
  }

  render() {
    return (
      <div>
        <input type="input"
              placeholder="City, State or Zip Code"
              value={this.state.inputCity}
              onChange={(event) => {
                this.setState({ inputCity: event.target.value })}}
              />
        <button onClick = {this.selectCity.bind(this)}> Submit </button>
      </div>
    )
  }
}
