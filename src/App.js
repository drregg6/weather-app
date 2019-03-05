/*

- Add images for different weather states
- Add other information -- main onClick => description
- Beautify!
- backgroundOptions
    2: thunderstorms
    3: drizzle
    5: rain
    6: snow
    7: fog
    8: clear / scattered clouds
  if code == 2 {
    select random image from backgroundOptions inside key 2
    set background image to random image
   }

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
      isCelsius: true,
      code: 0,
      main: ''
    };

    this.backgroundOptions = {
      2: ['list', 'of', 'image', 'urls'],
      3: ['list', 'of', 'image', 'urls'],
      5: ['list', 'of', 'image', 'urls'],
      6: ['list', 'of', 'image', 'urls'],
      7: ['list', 'of', 'image', 'urls'],
      8: ['list', 'of', 'image', 'urls']
    }
    this.capitalize = this.capitalize.bind(this);
    this.returnAPI = this.returnAPI.bind(this);
  }

  // rework this function
  changeTemp = () => {
    const fahrenheitTemp = (((this.state.temp - 273.15) * (9/5)) + 32).toFixed(0);
    if (this.state.isCelsius) { // if Celsius
      let fahrTemp = ((this.state.temp * (9/5)) + 32).toFixed(0);
      this.state.isCelsius = !this.state.isCelsius;
      this.setState({ // swap to Fahrenheit
        temp: fahrTemp
      });
    } else { // if Fahrenheit
      let celsTemp = ((this.state.temp - 32) * (5/9)).toFixed(0);
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
      temp: (res.data.main.temp - 273.15).toFixed(0),
      description: res.data.weather[0].description,
      isCelsius: true,
      code: parseInt((''+res.data.weather[0].id)[0]),
      main: res.data.weather[0].main
    }))
    .catch(err => {
      alert('location not found, try the closest city');
      console.log(err);
    });
  }

 componentDidMount() {
    this.returnAPI();
    console.log(this.state);
  }

  searchLocation = (location) => {
    console.log('searching...');
    this.returnAPI(location);
  }

  render() {
    return (
      <div className="App">
        <div className="container" style={containerStyles}>
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

const containerStyles = {
  backgroundImage: 'url("https://images.pexels.com/photos/19670/pexels-photo.jpg")',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

export default App;
