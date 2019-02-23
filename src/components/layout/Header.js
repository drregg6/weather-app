import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Weather App</h1>
        </header>
    );
}

const headerStyle = {
    color: '#fff',
    background: '#00f',
    padding: '10px',
    fontSize: '1.5rem'
}