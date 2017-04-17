import React from 'react';
import Weatherly from '../lib/components/Weatherly';
import { shallow, mount, render } from 'enzyme';
import Data from './mock-API.js';


// describe('<Weatherly />', () => {
//   it('state.input should change when input is changed and clear field after button click', () => {
//    var wrapper = mount(<Weatherly />)
//   //  var input = wrapper.find('input[type="input"]');
//   //  var btn = wrapper.find('#button');
//
//   //  input.simulate('change', { target: { value: 'denver, co' } });
//    //
//   //  expect(wrapper.state('inputCity')).toEqual('denver, co')
//    //
//   //  btn.simulate('click');
//    //
//   //  expect(wrapper.state('inputCity')).toEqual('')
//   console.log(wrapper.debug())
//   });
// })
