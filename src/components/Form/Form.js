import React from 'react';
import { NavLink } from 'react-router-dom';
import './Form.scss';

const Form = () => {

    return(
      <section className='buttons'>
        <button><NavLink to='/people' className='button'>People</NavLink></button>
        <button><NavLink to='/planets' className='button'>Planets</NavLink></button>
        <button><NavLink to='/vehicles' className='button'>vehicles</NavLink></button>
        <button><NavLink to='/favorites' className='button'>favorites</NavLink></button>
      </section>
    )
}

export default Form;