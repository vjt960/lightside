import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='loading'>
      <img 
        src='https://ui-ex.com/images/transparent-gifs-star-wars.gif' 
        alt='BB8 Loading'/>
      <h2 className='loading-text'>Loading...</h2>
    </div>
  )
}

export default Loader;