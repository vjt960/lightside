import React from 'react';
import './Form.scss';

const Form = () => {

  //onClick- select category
    return(
      <section className='buttons'>
        <button className='people-btn button'>People</button>
        <button className='planets-btn button'>Planets</button>
        <button className='vehicles-btn button'>vehicles</button>
        <button className='favorites-btn button'>favorites</button> 
      </section>
    )
}

export default Form;