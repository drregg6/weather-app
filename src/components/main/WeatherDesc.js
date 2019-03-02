import React, { Component } from 'react';

class WeatherDesc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1>{ this.props.capitalize(this.props.description) }</h1>
            </React.Fragment>
        )
    }
}

export default WeatherDesc;