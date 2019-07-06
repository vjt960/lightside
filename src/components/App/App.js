import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import {fetchAPI as data} from '../../utils/apiCalls';
import Loader from '../Loader/Loader';
// import Home from '../Home/Home';
import Showcase from '../Showcase/Showcase';
// import Form from '../Form/Form';
// import Catalog from '../Catalog/Catalog';
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

  async componentDidMount() {
    await data;
    const { films, people, planets, vehicles } = data;
    this.setState({ films, people, planets, vehicles, isLoading: false });
  }

  
  render() {

    const { films } = this.state;

    return (
      <div className='App'>
        <header>
          <h1>LightSide</h1>
        </header>
        {
          this.state.isLoading ? <Loader /> 
          : <Showcase films={films} />
        }       
      </div>
    )
  }
}

export default App;