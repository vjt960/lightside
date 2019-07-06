import React from 'react';
import { NavLink } from 'react-router-dom';
import './Form.scss';

const Form = () => {

    return(
      <section className='buttons'>
        <div className='button'>
          <NavLink to='/people' >People</NavLink>
        </div>
        <div className='button'>
          <NavLink to='/planets'>Planets</NavLink>
        </div>
        <div className='button'>
          <NavLink to='/vehicles'>vehicles</NavLink>
        </div>
      </section>
    )
}

export default Form;