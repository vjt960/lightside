import React from 'react';
import { NavLink } from 'react-router-dom';
import './Form.scss';
import PropTypes from 'prop-types';

const Form = (props) => {
  const { counter } = props;
  return(
    <form className='category-form'>
      <button 
        type='button' 
        className='category-btn'
      >
        <NavLink to='/people' className='nav-link'>people</NavLink>
      </button>
      <button 
        type='button' 
        className='category-btn'
      >
        <NavLink to='/planets' className='nav-link'>planets</NavLink>
      </button>
      <button 
        type='button' 
        className='category-btn'
      >
        <NavLink to='/vehicles' className='nav-link'>vehicles</NavLink>
      </button>
      <button 
        type='button' 
        className='category-btn fave-btn'
      >
        <NavLink to='/favorites' className='nav-link'>favorites <span className='counter'>{counter}</span></NavLink>
      </button>
    </form>
  )
}

Form.propTypes = {
  counter: PropTypes.number.isRequired
}

export default Form;