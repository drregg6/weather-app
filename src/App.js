/*

- Search bar to search the API and find your location
- Or a find by IP API
- Add images for different weather states
- Add other information

*/

import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Weather from './components/main/Weather';
import Search from './components/main/Search';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      temp: 0,
      description: '',
      isCelsius: true
    }

    this.capitalize = this.capitalize.bind(this);
    this.returnAPI = this.returnAPI.bind(this);
  }

  changeTemp = () => {
    const fahrenheitTemp = (((this.state.temp - 273.15) * (9/5)) + 32).toFixed(2);
    if (this.state.isCelsius) { // if Celsius
      let fahrTemp = ((this.state.temp * (9/5)) + 32).toFixed(2);
      this.state.isCelsius = !this.state.isCelsius;
      this.setState({ // swap to Fahrenheit
        temp: fahrTemp
      });
    } else { // if Fahrenheit
      let celsTemp = ((this.state.temp - 32) * (5/9)).toFixed(2);
      this.state.isCelsius = !this.state.isCelsius;
      this.setState({ // swap to Celsius
        temp: celsTemp
      });
    }
  }

  capitalize = str => {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  returnAPI = (location = 'Philadelphia') => {
    let loc = location;
    const apikey = '&appid=780062c871d1cd69decae7b5869ddeba';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${loc}${apikey}`;

    axios.get(endpoint)
    .then(res => this.setState({
      city: res.data.name,
      temp: (res.data.main.temp - 273.15).toFixed(2),
      description: res.data.weather[0].description,
      isCelsius: true
    }));
  }

 componentDidMount() {
    this.returnAPI();
    console.log(this.state);
  }

  searchLocation = (location) => {
    console.log('searching...');
    this.returnAPI(location);
    /*
      once SUBMIT is hit
        search for location in API
        if location is found
          and location is different than the current location
          update this.state to new api information
        if location is not found
          alert(cannot find location)
          check for typos
        end
    */
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Search
            searchLocation={this.searchLocation}
          />
          <Weather
            weather={this.state}
            changeTemp={this.changeTemp}
            capitalize={this.capitalize}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
