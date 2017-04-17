import React from 'react';
import CardTenDay from '../lib/components/CardTenDay';
import { shallow, mount, render } from 'enzyme';
import Data from './mock-API.js';
import $ from 'jquery';
require ('locus')

describe('<CardTenDay />', () => {
  it('should print 10 cards', () => {
    var wrapper = shallow(<CardTenDay cardForWeather = {[Data]}/>)

    var testDiv = wrapper.find('#tenDay-test').node.props.children
    expect(testDiv.length).toEqual(10)
    console.log(testDiv.length)
  })

  it('should print 4 items inside each tenDay card', () => {
    var wrapper = shallow(<CardTenDay cardForWeather = {[Data]}/>)

    var testDiv = wrapper.find('#card-tenday').node.props.children
    expect(testDiv.length).toEqual(4)
    console.log(testDiv.length)
  })

  it('should populate div with current Day from test API', () => {

    var wrapper = shallow(<CardTenDay cardForWeather = {[Data]}/>)
    var testDay = wrapper.find('#high');

    expect(testDay.node.props.children[1]).toEqual('77')
  });
})
