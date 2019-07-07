import React from 'react';
import './Showcase.scss';
import Header from '../Header/Header.js';

const Showcase = (props) => {
  const { films } = props;
  const randomIndex = Math.floor(Math.random() * Math.floor(films.length))
  const movie = films[randomIndex]
  const crawls = movie.openingCrawl
    .split('.').map(line => {
      return (
        <p>{line}</p>
      )
    })

  return (
    <div className='showcase'>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>{`Episode ${movie.episode}`}</p>
            <h1>{movie.title}</h1>
          </div>
          { crawls }
         </div>
      </section>
    </div>


    // <div className='fade showcase'>
    //   <Header />
    //   <section className='star-wars'>
    //     <div className='crawl'>
    //       <div className='title'>
    //         <h3>{movie.title}</h3>
    //         <h4>{movie.releaseDate}</h4>
    //         { crawls }
    //       </div>
    //     </div>
    //   </section>
    // </div>
  )
}

export default Showcase;