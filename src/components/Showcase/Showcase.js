import React from 'react';
import './Showcase.scss';

const Showcase = (props) => {
  const { films } = props;
  const randomIndex = Math.floor(Math.random() * Math.floor(films.length))
  let movie = films[randomIndex]

  return (
    <div className='fade Showcase'>
      <section className='star-wars'>
        <div className='crawl'>
          <div className='title'>
            <h3>{movie.title}</h3>
            <h4>{movie.releaseDate}</h4>
            <p>{movie.openingCrawl}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Showcase;