import React, { Component } from 'react';
import CityInput from './CityInput';
import Restaurants from './Restaurants';
// import Restaurant from './Restaurant';

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

  makeApiCall = (event) => {
    event.preventDefault();

    let stateCityInput = this.state.cityInput;
    let stateCities = this.state.cities;

    this.findCity(stateCityInput, stateCities);

    // fetch api
    // const url = 'https://opentable.herokuapp.com/api/cities';
    // fetch(url)
    //   .then((response) => response.json())
    //   .then(data => console.log(data.cities));
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

  findCity = (input, cities) => {
    cities.map(city => {
      if (city.toLowerCase().includes(input.toLowerCase())) {
        console.log(`Input Value: ${input}`);
        console.log(`City Returned:  ${city}`);

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
      <div>
        <CityInput setInput={this.setCityInput} makeApiCall={this.makeApiCall} />,
        <Restaurants restaurants={this.state.restaurants} />
      </div>
    )
  }
}

export default App;
