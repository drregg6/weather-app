import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Temp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let temp = this.props.temp;
        return (
            <div>
                <h1 style={tempStyle} onClick={this.props.changeTemp.bind(this, temp)} >
                    {temp}&deg;{' '}
                    {this.props.isCelsius && <React.Fragment>C</React.Fragment>}
                    {!this.props.isCelsius && <React.Fragment>F</React.Fragment>}
                </h1>
            </div>
        )
    }
}

const tempStyle = {
    cursor: 'pointer'
}

export default Temp;