import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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

  toggleFavorite = (category, name) => {
    console.log('toggling fave')
    let clonedState = this.state[category].slice();
    let index = clonedState.findIndex(obj => {
      return obj.name === name;
    });
    clonedState[index].favorited = !clonedState[index].favorited;
    this.setState({ [category]: clonedState });
    if (clonedState[index].favorited) {
      this.addFavorite(clonedState[index]);
    } else {
      this.removeFavorite(clonedState[index].name);
    }
  }

  addFavorite = obj => {
    console.log('adding favorite')
    this.setState({ favorites: [...this.state.favorites, obj]});
  }

  removeFavorite = name => {
    console.log('removing favorite')
    const { favorites } = this.state;
    const filteredFaves = favorites.filter(obj => {
      return obj.name !== name;
    });
    this.setState({ favorites: filteredFaves });
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
        <Route exact path='/people' render={() => <Catalog toggle={this.toggleFavorite} data={this.state.people} />} />
        <Route exact path='/planets' render={() => <Catalog toggle={this.toggleFavorite} data={this.state.planets} />} />
        <Route exact path='/vehicles' render={() => <Catalog toggle={this.toggleFavorite} data={this.state.vehicles} />} />
        <Route exact path='/favorites' render={() => <Catalog toggle={this.toggleFavorite} data={this.state.favorites} />} />
      </div>
    )
  }
}

export default App;