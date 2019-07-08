function getFilms() {
  return fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => data.results.map(film => {
      return {
        title: film.title, 
        releaseDate: film.release_date, 
        openingCrawl: film.opening_crawl, 
        episode: film.episode_id, 
        key: film.title
      }
    }))
}

function getPeople() {
  return fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => data.results.map(person => {
      return {
        name: person.name, 
        birthYear: person.birth_year, 
        gender: person.gender, 
        height: person.height, 
        eyeColor: person.eye_color, 
        favorited: false, 
        type: 'people', 
        key: person.name
      }
    }))
}

function getPlanets() {
  return fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => data.results.map(planet => {
      return {
        name: planet.name, 
        terrain: planet.terrain, 
        diameter: planet.diameter, 
        population: planet.population, 
        favorited: false, 
        type: 'planets', 
        key: planet.name
      }
    }))
}

function getVehicles() {
  return fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then(data => data.results.map(vehicle => {
      return {
        name: vehicle.name, 
        model: vehicle.model, 
        class: vehicle.vehicle_class, 
        passengers: vehicle.passengers, 
        favorited: false, 
        type: 'vehicles', 
        key: vehicle.name
      }
    }))
}

let netData = {
  'films': {}, 
  'people': {}, 
  'planets': {}, 
  'vehicles': {}
};

export let fetchAPI = 
  Promise.all([getFilms(), getPeople(), getPlanets(), getVehicles()])
    .then(response => {
      netData['films'] = response.shift();
      netData['people'] = response.shift();
      netData['planets'] = response.shift();
      netData['vehicles'] = response.shift();
      return netData;
    })
    .then(function(dataset) {
      fetchAPI = dataset;
    })
    .catch(error => error)
