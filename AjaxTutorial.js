import React from 'react';
import reactDOM from 'react-dom';
import Weatherly from './components.Weatherly'

ReactDOM.render(<Weatherly source='http://www.urlOfApi.com'/> , document.getElementById('application')) //hide source by making source key a variable
//source being passed through as a prop as this.props.source




//Weatherly file....

import React, { Component } from 'react';
import WeatherList from './WeatherList'
import $ from 'jquery'

export default class Weatherly extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      weather: [],
    }
  }

  componentDidMount(){
    // let location  = localStorage.getItem('location') || ''
    let location  = localStorage.getItem('location')
    this.setState({location: location ? location : ''}, () => {
      this.setState({weather: this.handleLocationSubmit()})
    })
    // this.setState({ location: location, weather: this.handleLocationSubmit()})
  }

  handleLocationSubmit(){
    //set the location to localstorage
    localStorage.setItem('location', this.state.location.toLowerCase())

    $.get(this.props.source + this.state.location.toLowerCase()).then((weather)=> {
      this.setState({ weather: weather })
    })
    // I need to make an api call
    //then make that call and set all the stuff coming back as my state
  }

  render(){
    return (
      <section>
        <input type = 'text'
              placeholder='add a location'
              value={this.state.location}
              onChange={(event) => { this.setState({ location: event.target.value })}}
              />
        <input type = 'submit'
              disabled={!this.state.location}
              onClick={this.handleLocationSubmit.bind(this)}
              />
        <section>
          <h3>All the wetaher</h3>
          <WeatherList allTheWeather = {this.state.weather} />
        </section

      </section>
    )
  }
}


// WeatherList file

import React from 'react'

const WeatherList = ({allTheWeather}) => {
  if(!allTheWeather.length) {
    <div>
      Welcome to...please add location
    </div>
  }

  return(
    <section>
      {allTheWeather.map((weather, index) => {
        return (
          <section key={index}>
            <p>location: {weatherCard.location}</p>
            <p> high: {weatherCard.temp.high}</p>
            <p> low: {weatherCard.temp.low}</p>
          </section>
        )
      })}
    </section>
  )

}

export default WeatherList
