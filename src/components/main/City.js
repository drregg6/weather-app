import React from 'react';
import PropTypes from 'prop-types';

class City extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1>{ this.props.city }</h1>
            </React.Fragment>
        )
    }
}

City.propTypes = {
    city: PropTypes.string.isRequired
}

export default City;