import React from 'react';
import { shallow, mount} from 'enzyme';
import Loader from './Loader';

describe ('Loader', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Loader />)
    expect(wrapper).toMatchSnapshot();
  })
})