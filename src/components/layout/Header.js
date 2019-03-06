import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Weather App</h1>
        </header>
    );
}

const headerStyle = {
    color: '#333',
    background: 'rgba(255, 167, 3, 1)',
    padding: '10px',
    fontSize: '1.5rem'
}