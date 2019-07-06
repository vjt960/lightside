function getFilms() {
  return fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => data.results.map(film => {
      return {
        title: film.title, 
        releaseDate: film.release_date, 
        openingCrawl: film.opening_crawl
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
        favorited: false
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
        favorited: false
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
        favorited: false
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
