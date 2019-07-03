import React, { Component } from 'react';
import Loader from '../Loader/Loader';
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
      vehicles: [], 
      favorites: []
    }
  }

  componentDidMount() {
    this.getFilms();
  }

  getFilms = () => {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => this.filmData(data.results))
      .then(films => this.setState({ films: films, isLoading: false }))
      .catch(error => this.setState({ error: error.message }))
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
    return (
      <div className='App'>
        <header>
          <h1>LightSide</h1>
        </header>
        {
          this.state.isLoading === true 
          ? <Loader /> 
          : <Showcase films={this.state.films}/>
        }
      </div>
    )
  }
}

export default App;