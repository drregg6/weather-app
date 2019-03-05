import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

WeatherDesc.propTypes = {
    description: PropTypes.string.isRequired,
    capitalize: PropTypes.func.isRequired
}

export default WeatherDesc;