import React from 'react';
import SearchField from '../lib/components/SearchField';
import { shallow, mount, render } from 'enzyme';
import Data from './mock-API.js';

describe('<SearchField />', () => {
  it('state.input should change when input is changed and clear field after button click', () => {
   var wrapper = shallow(<SearchField handleClick={ () => {} } />)
   var input = wrapper.find('input[type="input"]');
   var btn = wrapper.find('#button');

   input.simulate('change', { target: { value: 'denver, co' } });

   expect(wrapper.state('inputCity')).toEqual('denver, co')

   btn.simulate('click');

   expect(wrapper.state('inputCity')).toEqual('')
  });
})
