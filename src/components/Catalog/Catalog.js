import React from 'react';
import './Catalog.scss';
import Card from '../Card/Card';

const Catalog = (props) => {
  let data = props.data.map(obj => {
    return (
      <Card data={Object.entries(obj)} />
    )
  })
  return(
    <section className='catalog'>
      {data}
    </section>
  )
}

export default Catalog;