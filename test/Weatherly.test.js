import React from 'react';
import Weatherly from '../lib/components/Weatherly';
import SearchField from '../lib/components/Weatherly';
import { shallow, mount, render } from 'enzyme';
import Data from './mock-API.js';
import $ from 'jquery';
require ('locus')

var wrapper = shallow(<Weatherly />)

describe('<Weatherly />', () => {
  it('Weatherly state.weather starts as empty array', () => {
   var state = wrapper.state('weather');

   expect(state).toEqual([])
 })

 it('should render state.weather with mock api data', () => {
   var state = wrapper.state('weather')
   state.push(Data);

   expect(state.length).toEqual(1)

 })

 it('main should have a length of two items', () => {
   var testMain = wrapper.find('#main').node.props.children
  //  console.log(testMain[1]);
   expect(testMain[0].props.children[0].props.className).toEqual('logo')
   expect(testMain[0].props.children[1].props.className).toEqual('test-search')
   expect(testMain[1].props.id).toEqual('hourly-tenday-container')

 })
})
