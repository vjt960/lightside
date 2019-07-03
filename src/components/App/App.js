import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Home from '../Home/Home';
import Showcase from '../Showcase/Showcase';
import Form from '../Form/Form';
import Catalog from '../Catalog/Catalog';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      error: '', 
      category: '',
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

    const { people, planets, vehicles, favorites } = this.state;

    return (
      <div className='App'>
        <header>
          <h1>LightSide</h1>
        </header>
        {
          this.state.isLoading ? <Loader /> 
          : <Showcase films={this.state.films} />
        }
        <Form />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/people' render={() => <Catalog data={people} info={Object.keys(people[0])} /> } />
          <Route exact path='/planets' render={() => <Catalog data={planets} info={Object.keys(planets[0])} /> } />
          <Route exact path='/vehicles' render={() => <Catalog data={vehicles} info={Object.keys(vehicles[0])} /> } />
          <Route exact path='/favorites' render={() => <Catalog data={favorites} info={Object.keys(favorites[0])} /> } />
        </Switch>
      </div>
    )
  }
}

export default App;