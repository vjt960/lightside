import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import {fetchAPI as data} from '../../utils/apiCalls';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
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

  async componentDidMount() {
    await data;
    const { films, people, planets, vehicles } = data;
    this.setState({ films, people, planets, vehicles, isLoading: false });
  }

  
  render() {

    const { films } = this.state;

    return (
      <div className='App'>
        <Header />
        {
          this.state.isLoading ? <Loader /> 
          : <Showcase films={films} />
        }
        <Form />
        <Route exact path='/people' render={() => <Catalog data={this.state.people} />}/>
        <Route exact path='/planets' render={() => <Catalog data={this.state.planets} />}/>
        <Route exact path='/vehicles' render={() => <Catalog data={this.state.vehicles} />}/>
        <Route exact path='/favorites' render={() => <Catalog data={this.state.favorites} />}/>
      </div>
    )
  }
}

export default App;