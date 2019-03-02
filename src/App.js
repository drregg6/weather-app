/*

- Search bar to search the API and find your location
- Or a find by IP API
- Break Weather components down
- Add images for different weather states
- Change the temperature: F and C
- Add other information

*/

import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Weather from './components/main/Weather';

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
  }

 componentDidMount() {
    let city = 'Philadelphia';
    const apikey = '&appid=780062c871d1cd69decae7b5869ddeba';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}${apikey}`;
    axios.get(endpoint)
    .then(res => this.setState({
      city: res.data.name,
      temp: (res.data.main.temp - 273.15).toFixed(2),
      description: res.data.weather[0].description
    }));
    console.log(this.state);
   }

  changeTemp = () => {
    const fahrenheitTemp = (((this.state.temp - 273.15) * (9/5)) + 32).toFixed(2);
    if (this.state.isCelsius) { // if Celsius
      this.setState({ // swap to Fahrenheit
        temp: ((this.state.temp * (9/5)) + 32).toFixed(2)
      });
      this.state.isCelsius = !this.state.isCelsius;
    } else { // if Fahrenheit
      this.setState({ // swap to Celsius
        temp: ((this.state.temp - 32) * (5/9)).toFixed(2)
      });
      this.state.isCelsius = !this.state.isCelsius;
    }
  }

  capitalize = str => {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Weather weather={this.state} changeTemp={this.changeTemp} capitalize={this.capitalize} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
