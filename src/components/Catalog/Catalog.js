import React from 'react';
import './Catalog.scss';
import { Link } from 'react-router-dom';

const Catalog = (props) => {
  let data = props.data.map(obj => {
    return (
      <div>
        <h1>{obj.name}</h1>
      </div>
    )
  })
  return(
    <article className='catalog'>
      {data}
    </article>
  )
}

export default Catalog;