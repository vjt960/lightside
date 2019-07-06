import React, { Component } from 'react';
import Showcase from '../Showcase/Showcase';
import Form from '../Form/Form';
import './App.scss';
import { Route, NavLink } from 'react-router-dom';

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
    
    fetch(`${url}people/`)
      .then(response => response.json())
      .then(data => this.peopleData(data.results))
      .then(people => this.setState({ people: people }))
      .catch(error => this.setState({error: error.message}))

    fetch(`${url}planets/`)
      .then(response => response.json())
      .then(data => this.planetData(data.results))
      .then(planet => this.setState({ planets: planet }))
      .catch(error => this.setState({error: error.message}))
    
    fetch(`${url}vehicles/`)
      .then(response => response.json())
      .then(data => this.vehicleData(data.results))
      .then(vehicle => this.setState({ vehicles: vehicle }))
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

  peopleData = people => {
    const peopleInfo = people.map(person => {
      return {
        name: person.name,
        birthYear: person.birth_year,
        gender: person.gender,
        height: person.height, 
        eyeColor: person.eye_color
      }
    })
    return Promise.all(peopleInfo);
  }
  
  planetData = planets => {
    const planetInfo = planets.map(planet => {
      return {
        name: planet.name,
        terrain: planet.terrain,
        diameter: planet.diameter,
        population: planet.population, 
      }
    })
    return Promise.all(planetInfo);
  }

  vehicleData = vehicles => {
    const vehicleInfo = vehicles.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        numberPassengers: vehicle.passengers, 
      }
    })
    return Promise.all(vehicleInfo);
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
        {this.state.isLoading === true ?
        loadingMessage :
        <Showcase 
          films = {this.state.films}
        />
        }
        <Form />
      </div>
    
    )
  }
}

export default App;