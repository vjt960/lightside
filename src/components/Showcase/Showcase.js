import React from 'react';
import './Showcase.scss';

const Showcase = ({films}) => {
  let movie = films[0]
  console.log(movie)
  return (
    <section>
      <p>{movie.openingCrawl}</p>
      <h3>{movie.title}</h3>
      <h4>{movie.releaseDate}</h4>
    </section>
  )
}

export default Showcase;