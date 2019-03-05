import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Temp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let temp = this.props.temp;
        return (
            <div style={divTemp}>
                <p style={tempStyle} onClick={this.props.changeTemp.bind(this, temp)} >
                    {temp}&deg;{' '}
                    {this.props.isCelsius && <React.Fragment>C</React.Fragment>}
                    {!this.props.isCelsius && <React.Fragment>F</React.Fragment>}
                </p>
            </div>
        )
    }
}

Temp.propTypes = {
    temp: PropTypes.number.isRequired,
    changeTemp: PropTypes.func.isRequired,
    isCelsius: PropTypes.bool.isRequired
}

const tempStyle = {
    cursor: 'pointer',
    fontSize: 40,
    fontWeight: 'bold',
    margin: '20px auto'
}

const divTemp = {
    width: '40%',
    margin: '0 auto'
}

export default Temp;