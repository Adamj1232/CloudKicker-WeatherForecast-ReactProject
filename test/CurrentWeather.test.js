import React from 'react';
import CurrentWeather from '../lib/components/CurrentWeather';
import SearchField from '../lib/components/SearchField';
import { shallow, mount, render } from 'enzyme';
import Data from './mock-API.js';
import $ from 'jquery';
require ('locus')

var wrapper = shallow(<CurrentWeather weather={[Data]}/>)

describe('<CurrentWeather />', () => {
  it('should have seven children', () => {
    var testDiv = wrapper.find('#current-inner-container').node.props.children
    expect(testDiv.length).toEqual(7)
  })

  it('should populate div with current Day from test API', () => {
    var testDay = wrapper.find('#testDay');

    expect(testDay.node.props.children).toEqual('Monday')
  });

  it('should populate div with current location from test API', () => {
    var testLocation = wrapper.find('.location')

    expect(testLocation.node.props.children[1]).toEqual('Denver, CO')
  });
})
