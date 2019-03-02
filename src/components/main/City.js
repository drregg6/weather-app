import React from 'react';

class City extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{ this.props.city }</h1>
            </div>
        )
    }
}

export default City;