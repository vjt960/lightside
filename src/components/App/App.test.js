import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import mockData from '../../data/mock-data';

describe('App', () => {

  let fetchData;
  let data;
  let wrapper;

  beforeEach(() => {
    //
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('calls fetch with the right data', () => {
    //
  });

  it('should update state with the resolved fetch data', () => {
    //
  });

  it('should be able to toggle favorited objects', () => {
    //
  });

  it('should add objects to favorites', () => {
    //
  });

  it('should removed objects from favorites', () => {
    //
  });
})
