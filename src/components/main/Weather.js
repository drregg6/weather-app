import React from 'react';
import City from './City';
import Temp from './Temp';
import WeatherDesc from './WeatherDesc';

class Weather extends React.Component {
    /*
        let city = 'Philadelphia';
        let lat = `lat=39&`;
        let lon = `lon=139`;
        const apikey = '&appid=780062c871d1cd69decae7b5869ddeba';
        let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}${apikey}`;
     */

    render() {
        return (
            <div style={weatherStyle}>
                <City city={this.props.weather.city} />
                <Temp changeTemp={this.props.changeTemp} temp={this.props.weather.temp} isCelsius={this.props.weather.isCelsius} />
                <WeatherDesc description={this.props.weather.description} capitalize={this.props.capitalize} />
            </div>
        );
    }
}

const weatherStyle = {
    // height: '200px'
}

export default Weather;