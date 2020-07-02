import React, { Component } from 'react';
import CityInput from './CityInput';
import Restaurants from './Restaurants';
import RefineInput from './RefineInput'

class App extends Component {
  state = {
    cities: [],
    restaurants: [],
    cityInput: '',
    refineInput: '',
  }

  setCityInput = (event) => {
    // Disable Submit Button When Input is Empty
    if (event.target.value !== '') {
      document.querySelector('.restaurant-form__button').classList.remove('restaurant-form__button--disable');
    }
    if (event.target.value === '') {
      document.querySelector('.restaurant-form__button').classList.add('restaurant-form__button--disable');
    }
    // Set State for City Input
    this.setState({ cityInput: event.target.value })
  }

  setRefineInput = (event) => {
    // Set State for Refine Input
    this.setState({ refineInput: event.target.value })
  }

  makeApiCall = (event) => {
    event.preventDefault();
    const { cityInput, cities } = this.state;
    this.findCity(cityInput, cities);
  }

  componentDidMount = () => {
    const url = 'https://opentable.herokuapp.com/api/cities';
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        this.setState({
          cities: data.cities,
        })
      })
      .catch(error => console.error('Looks like something went wrong!', error));
  }

  // Find Match For City Based on User Input
  findCity = (cityInput, cities) => {
    cities.map(city => {
      if (city.toLowerCase().includes(cityInput.toLowerCase())) {
        fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
          .then((response) => response.json())
          .then(data => {
            this.setState({
              restaurants: data.restaurants,
            })
          })
          .catch(error => console.error('Looks like something went wrong!', error));
      }
      return true;
    });
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="header__container">
            <h1 className="header__title"><span className="header__icon fas fa-utensils"></span>Restaurant Finder</h1>
            <h2 className="header__subtitle">Find the best restaurants in your current city!</h2>
          </div>
        </header>
        <section className="restaurant-form">
          <form onSubmit={this.makeApiCall}>
            <label htmlFor="cityInput" className="restaurants__city-label">City</label>
            <CityInput setInput={this.setCityInput} />
            <div className="restaurant-form__button-contain">
              <button className="restaurant-form__button restaurant-form__button--disable" type="submit" name="submit">Search<span className="restaurant-form__search-icon fas fa-search"></span></button>
            </div>
          </form>
        </section>
        <section className="restaurants">
          <div className="restaurants__refine-contain">
            <label htmlFor="refine" className="restaurants__refine-label">Refine Results</label>
            <RefineInput refineInput={this.setRefineInput} />
          </div>
          <Restaurants restaurants={this.state.restaurants} refineInput={this.state.refineInput} />
        </section>
        <footer className="credits">
          <p className="credits__content">API Data Retrieved from <a className="credits__link" href="https://opentable.herokuapp.com/" target="_blank" rel="noopener noreferrer">OpenTable API</a></p>
        </footer>
      </div>
    )
  }
}

export default App;