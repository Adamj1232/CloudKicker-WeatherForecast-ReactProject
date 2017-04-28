import React, { Component } from 'react';
import $ui from 'jquery-ui';

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      autocomplete: []
    };
  }

  autoCompleteApiGenerator(inputValue) {
    jQuery.getJSON(`https://autocomplete.wunderground.com/aq?cb=?&query=${inputValue}`)
    .then((data) => {
      this.state.autocomplete = [];
      data.RESULTS.forEach((location) => {
        if (inputValue.length > 2) {
          this.state.autocomplete.push(location.name);
          this.handleAutoComplete();
        }
      });
    });
  }

  handleAutoComplete() {
    $('.user-input').autocomplete({
      minLength: 2,
      source: this.state.autocomplete,
      open: () => $('.ui-menu').width(285),
      select: (event, ui) => {
        this.setState({
          location: ui.item.value,
        }, this.selectCity);
      },
    });
  }

  handleInput(e) {
    const inputValue = e.target.value;
    this.setState({
      location: inputValue,
    });
    this.autoCompleteApiGenerator(inputValue);
  }

  componentDidMount() {
    let storedLocationKey = localStorage.getItem('storedLocation');

    if( storedLocationKey ){
      this.setState({ location: storedLocationKey }, () => {
      this.props.handleClick(this.state.location)
      this.setState({ location: '' })
    });
    }
  }

  selectCity() {
    this.props.handleClick(this.state.location)
    this.setState({ location: '' })
  };

  render() {
    return (
      <div id='input'>
        <input
         className='user-input'
         type="input"
         placeholder="City, State or Zip Code"
         onKeyPress={ e => {(e.key === 'Enter' ? this.selectCity() : null)}}
         value={this.state.location}
         onChange={ e => {
          this.handleInput(e)}}
        />
        <button
          id = 'button'
          onClick = {this.selectCity.bind(this)}>
          Submit
        </button>
      </div>
    )
  }
}
