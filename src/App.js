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
      description: ''
    }
  }

 componentDidMount() {
    let city = 'Philadelphia';
    const apikey = '&appid=780062c871d1cd69decae7b5869ddeba';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}${apikey}`;
    axios.get(endpoint)
    .then(res => this.setState({
      city: res.data.name,
      temp: res.data.main.temp,
      description: res.data.weather[0].description
    }));
    console.log(this.state);
   }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Weather weather={this.state} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
