import React from 'react';
import './Loader.scss';
import Header from '../Header/Header';

const Loader = () => {
  return (
    <div className='loading showcase'>
      <Header />
      <img 
        className='loading-img'
        src={require('../../images/bb8.gif')} 
        alt='BB8 Loading'/>
      <h2 className='loading-text'>Loading . . .</h2>
    </div>
  )
}

export default Loader;