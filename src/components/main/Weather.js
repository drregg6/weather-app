import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div style={weatherStyle}>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

const weatherStyle = {
    height: '200px'
}

export default Weather;