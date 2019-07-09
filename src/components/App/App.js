import React, { Component } from "react";
import { Route } from "react-router-dom";
import { fetchAPI } from "../../utils/apiCalls";
import Loader from "../Loader/Loader";
import Showcase from "../Showcase/Showcase";
import Form from "../Form/Form";
import Catalog from "../Catalog/Catalog";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      error: "",
      category: "",
      films: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  async componentDidMount() {
    const data = await fetchAPI();
    const { films, people, planets, vehicles } = data;
    this.setState({ films, people, planets, vehicles, isLoading: false });
  }

  toggleFavorite = (category, name) => {
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
  };

  addFavorite = obj => {
    console.log("adding favorite");
    this.setState({ favorites: [...this.state.favorites, obj] });
  };

  removeFavorite = name => {
    console.log("removing favorite");
    const { favorites } = this.state;
    const filteredFaves = favorites.filter(obj => {
      return obj.name !== name;
    });
    this.setState({ favorites: filteredFaves });
  };

  render() {
    const { films, people, planets, vehicles, favorites } = this.state;

    return (
      <div className="App">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Showcase key={"films"} films={films} />
        )}
        <Form counter={favorites.length} />
        <Route
          exact
          path="/"
          render={() => <Catalog key={"home"} counter={1} data={[]} />}
        />
        <Route
          exact
          path="/people"
          render={() => (
            <Catalog
              toggle={this.toggleFavorite}
              key={"people"}
              counter={people.length}
              data={people}
            />
          )}
        />
        <Route
          exact
          path="/planets"
          render={() => (
            <Catalog
              toggle={this.toggleFavorite}
              key={"planets"}
              counter={planets.length}
              data={planets}
            />
          )}
        />
        <Route
          exact
          path="/vehicles"
          render={() => (
            <Catalog
              toggle={this.toggleFavorite}
              key={"vehicles"}
              counter={vehicles.length}
              data={vehicles}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <Catalog
              toggle={this.toggleFavorite}
              key={"favorites"}
              counter={favorites.length}
              data={favorites}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
