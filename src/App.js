/*

- Beautify!
- change header color

*/

import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Weather from './components/main/Weather';
import Search from './components/main/Search';

import axios from 'axios';
import './App.css';

const backgroundOptions = {
  thunderstorm: [
    require('./images/thunderstorm1.jpeg'),
    require('./images/thunderstorm2.jpeg'),
    require('./images/thunderstorm3.jpeg'),
    require('./images/thunderstorm4.jpg'),
    require('./images/thunderstorm5.jpeg')
  ],
  rain: [
    require('./images/rain1.jpeg'),
    require('./images/rain2.jpeg'),
    require('./images/rain3.jpeg'),
    require('./images/rain4.jpeg'),
    require('./images/rain5.jpeg')
  ],
  snow: [
    require('./images/snow1.jpeg'),
    require('./images/snow2.jpeg'),
    require('./images/snow3.jpeg'),
    require('./images/snow4.jpeg'),
    require('./images/snow5.jpeg')
  ],
  fog: [
    require('./images/fog1.jpg'),
    require('./images/fog2.jpeg'),
    require('./images/fog3.jpeg'),
    require('./images/fog4.jpeg'),
    require('./images/fog5.jpeg')
  ],
  clouds: [
    require('./images/clouds1.jpeg'),
    require('./images/clouds2.jpeg'),
    require('./images/clouds3.jpeg'),
    require('./images/clouds4.jpeg'),
    require('./images/clouds5.jpeg')
  ]
}



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

    this.capitalize = this.capitalize.bind(this);
    this.returnAPI = this.returnAPI.bind(this);
    this.returnBackground = this.returnBackground.bind(this);
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

  returnBackground = (code) => {
    let randNum = Math.floor(Math.random() * 5);
    switch(code) {
      case 2:
        return backgroundOptions.thunderstorms[randNum];
        break;
      case 3:
        return backgroundOptions.rain[randNum];
        break;
      case 5:
        return backgroundOptions.rain[randNum];
        break;
      case 6:
        return backgroundOptions.snow[randNum];
        break;
      case 7:
        return backgroundOptions.fog[randNum];
        break;
      default:
        return backgroundOptions.clouds[randNum];
    }
  }

 componentDidMount() {
    this.returnAPI();
    this.returnBackground(this.state.code);
    console.log(this.state);
  }

  searchLocation = (location) => {
    console.log('searching...');
    this.returnAPI(location);
  }

  render() {

    const containerStyles = {
      backgroundImage: `url(${this.returnBackground(this.state.code)})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
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

export default App;
