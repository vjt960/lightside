import React from 'react';
import { NavLink } from 'react-router-dom';
import './Form.scss';

const Form = () => {

    return(
      <form className='buttons'>
        <button><NavLink to='/people' className='button'>people</NavLink></button>
        <button><NavLink to='/planets' className='button'>Planets</NavLink></button>
        <button><NavLink to='/vehicles' className='button'>vehicles</NavLink></button>
        <button><NavLink to='/favorites' className='button favorite-btn'>favorites</NavLink></button>
      </form>
    )
}

export default Form;