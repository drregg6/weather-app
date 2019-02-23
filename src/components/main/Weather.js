import React from 'react';

class Weather extends React.Component {
    /*
        let city = 'Philadelphia';
        let lat = `lat=39&`;
        let lon = `lon=139`;
        const apikey = '&appid=780062c871d1cd69decae7b5869ddeba';
        let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}${apikey}`;
     */

    render() {
        const { city, temp, description } = this.props.weather
        return (
            <div style={weatherStyle}>
                <h1>{city}</h1>
                <p>{temp}</p>
                <p>{description}</p>
            </div>
        );
    }
}

const weatherStyle = {
    // height: '200px'
}

export default Weather;