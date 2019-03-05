import React from 'react';
import PropTypes from 'prop-types';

import City from './City';
import Temp from './Temp';
import WeatherDesc from './WeatherDesc';

class Weather extends React.Component {

    render() {
        return (
            <div style={weatherStyle} className="main">
                <City
                    city={this.props.weather.city}
                />
                <Temp
                    changeTemp={this.props.changeTemp}
                    temp={this.props.weather.temp}
                    isCelsius={this.props.weather.isCelsius}
                />
                <WeatherDesc
                    description={this.props.weather.description}
                    capitalize={this.props.capitalize}
                />
            </div>
        );
    }
}

const weatherStyle = {
    background: '#fff'
}

Weather.propTypes = {
    weather: PropTypes.object.isRequired,
    changeTemp: PropTypes.func.isRequired,
    capitalize: PropTypes.func.isRequired
}

export default Weather;