import React from 'react';
import { shallow, mount } from 'enzyme';
import Showcase from './Showcase';

describe ('Showcase', ()=> {
  it('should expect wrapper to match snapshot', () => {
    let wrapper = shallow(<Showcase />)
    expect(wrapper).toMatchSnapshot();
  })
})