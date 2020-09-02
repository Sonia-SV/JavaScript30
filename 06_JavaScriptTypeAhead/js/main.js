'use strict';

//API ENDPOINT

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//VARIABLES
let allCities = [];
let searchCities = [];
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
let userSearch = '';

//FETCH API
const getCitiesFromApi = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((searchData) => {
      for (const data of searchData) {
        allCities.push({
          name: data.city,
          state: data.state,
          population: data.population,
        });
      }
    });
};

//ADD COMMAS TO POPULATION NUMBER
const numberCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

//FUNCTION THAT STARTS AFTER USER ACTION
const handleSearch = (ev) => {
  ev.preventDefault();
  filterCity();
};

//FILTER CITY OR STATE WITH USER INPUT
function filterCity() {
  let userInput = input.value.toLowerCase();
  searchCities = allCities.filter((city) => city.name.toLowerCase().includes(userInput) || city.state.toLowerCase().includes(userInput));
  paintResults(userInput);
}

//PAINT RESULT LIST
const paintResults = (input) => {
  let renderCities = '';

  searchCities.map((city) => {
    const nameClass = city.name.toLowerCase().split(input).join(`<span class="hl">${input}</span>`);
    const stateClass = city.state.toLowerCase().split(input).join(`<span class="hl">${input}</span>`);
    return (renderCities += `<li><span>${nameClass}, ${stateClass}</span><span>${numberCommas(city.population)}</span></li>`);
  });
  suggestions.innerHTML = renderCities;
};

//EVENTS
getCitiesFromApi();
input.addEventListener('keyup', handleSearch);
input.addEventListener('change', handleSearch);
