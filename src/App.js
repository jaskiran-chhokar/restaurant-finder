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
    this.setState({ cityInput: event.target.value })
  }

  setRefineInput = (event) => {
    this.setState({ refineInput: event.target.value })
  }

  makeApiCall = (event) => {
    event.preventDefault();
    let stateCityInput = this.state.cityInput;
    let stateCities = this.state.cities;
    this.findCity(stateCityInput, stateCities);
  }

  componentDidMount = () => {
    const url = 'https://opentable.herokuapp.com/api/cities';
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        this.setState({
          cities: data.cities,
        })
      });
  }

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
      }
    });
  }

  render() {

    return (
      <section>
        <div className='container display-grid'>
          <form onSubmit={this.makeApiCall}>
            <CityInput setInput={this.setCityInput} />
            <input type="submit" name="submit" />
          </form>
          <RefineInput refineInput={this.setRefineInput} />
        </div>
        <div className='container'>
          <Restaurants restaurants={this.state.restaurants} refineInput={this.state.refineInput} />
        </div>
      </section>
    )
  }
}

export default App;