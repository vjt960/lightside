import React, { Component } from 'react';
import Showcase from '../Showcase/Showcase';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      error: '',
      films: [], 
      people: [], 
      planets: [], 
      vehicles: []
    }
  }

  componentDidMount() {
    let url = 'https://swapi.co/api/';

    fetch(`${url}films/`)
      .then(response => response.json())
      .then(data => this.filmData(data.results))
      .then(films => this.setState({ films: films, isLoading: false }))
      .catch(error => this.setState({error: error.message}))
  }

  filmData = films => {
    const neededInfo = films.map(film => {
     return {
      title: film.title,
      openingCrawl: film.opening_crawl,
      releaseDate: film.release_date}
    })
    return Promise.all(neededInfo)
  }
  
  
  render() {
    const loadingMessage = (
      <div className='loading'>
        <img 
          src='https://ui-ex.com/images/transparent-gifs-star-wars.gif' 
          alt='BB8 Loading'/>
        <h2 className='loading-text'>Loading...</h2>
      </div>
    )

    return (
      <div className='App'>
        <header>
          <h1>LightSide</h1>
        </header>
        {
          this.state.isLoading === true 
          ? loadingMessage 
          : <Showcase films={this.state.films}/>
        }
      </div>
    )
  }
}

export default App;