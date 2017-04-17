import React from 'react';
import CurrentWeather from '../lib/components/CurrentWeather';
import SearchField from '../lib/components/SearchField';
import { shallow, mount, render } from 'enzyme';
import Data from './mock-API.js';
import $ from 'jquery';
require ('locus')

describe('<CurrentWeather />', () => {
  it('should populate div with current Day from test API', () => {

    var wrapper = shallow(<CurrentWeather weather={[Data]}/>)
    var testDay = wrapper.find('#testDay');

    expect(testDay.node.props.children).toEqual('Monday')

  });

  it('should populate div with current location from test API', () => {

    var wrapper = shallow(<CurrentWeather weather={[Data]}/>)
    var testLocation = wrapper.find('.location')

    expect(testLocation.node.props.children[1]).toEqual('Denver, CO')

    console.log(testLocation.node.props.children[1])
  });
})
