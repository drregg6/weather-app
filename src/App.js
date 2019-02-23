import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Weather from './components/main/Weather';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Weather />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
