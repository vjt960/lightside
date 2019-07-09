import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';

describe('Header', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
  })

})