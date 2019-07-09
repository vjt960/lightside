import React from 'react';
import './Showcase.scss';
import Header from '../Header/Header.js';
import PropTypes from 'prop-types';

const Showcase = (props) => {
  const { films } = props;
  const randomIndex = Math.floor(Math.random() * Math.floor(films.length))
  const movie = films[randomIndex]
  const crawls = movie.openingCrawl
    .split('.').map((sentence, index) => {
      return (
        <p key={index}>{sentence}</p>
      )
    })

  return (
    <div className='showcase'>
      <Header />
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>{`Episode ${movie.episode}`}</p>
            <h1>{movie.title}</h1>
          </div>
          { crawls }
         <p className='release-date'>{movie.releaseDate}</p>
         </div>
      </section>
    </div>
  )
}

Showcase.propTypes = {
  films: PropTypes.array.isRequired
}

export default Showcase;