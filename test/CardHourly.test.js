import React from 'react';
import CardHourly from '../lib/components/CardHourly';
import { shallow, mount, render } from 'enzyme';
import Data from './mock-API.js';
import $ from 'jquery';
require ('locus')

var wrapper = shallow(<CardHourly weatherForCard = {[Data]}/>)

describe('<CardHourly />', () => {
  it('should print 10 cards with different indices starting at 0', () => {

    var testDiv = wrapper.find('#hourly-test').node.props.children
    // console.log(testDiv)
    expect(testDiv[9].key).toEqual('9')
  })

  it('should print 4 pieces of forecast info on cards', () => {

    var testTableTop = wrapper.find('#card-hourly').node.props.children.props.children

    var testTableBottom = wrapper.find('#card-hourly').node.props.children.props.children[0].props.children

    let cardInfo = testTableTop.length + testTableBottom.length
    console.log(cardInfo)
    expect(cardInfo).toEqual(4)
  })

  it('should print the forecast condition', () => {

    var testTable = wrapper.find('#card-hourly').node.props.children.props.children[1].props.children
    // console.log(testTable[1].props.children)
    expect(testTable[1].props.children).toEqual('Partly Cloudy')
  })

  it('should print the forecast time', () => {

    var testTable = wrapper.find('#card-hourly').node.props.children.props.children[0].props.children
    // console.log(testTable[0].props.children)
    expect(testTable[0].props.children).toEqual('12:00 PM')
  })
})
