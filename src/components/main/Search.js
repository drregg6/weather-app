import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.searchLocation(this.state.value);
        this.setState({
            value: ''
        });
    }

    getInput = (ev) => {
        this.setState({
            value: ev.target.value
        });
    }

    render() {
        return (
            <form style={searchStyles} onSubmit={this.onSubmit} >
                <input
                    style={inputStyle}
                    type="text"
                    name="location"
                    placeholder="Search for a location..."
                    value={this.state.value}
                    onChange={this.getInput}
                />
                <input style={buttonStyle} type="submit" value="Search!" />
            </form>
        )
    }
}

const searchStyles = {
    display: 'flex',
    height: '40px',
    backgroundColor: '#fff'
}

const inputStyle = {
    flex: '0 0 79%',
    marginRight: '1%'
}

const buttonStyle = {
    flex: '0 0 19%',
    marginLeft: '1%'
}

export default Search;