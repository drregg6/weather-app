import React from 'react';

export default function Footer() {
    let date = new Date();
    return (
        <footer style={footerStyle}>
            <p>
                &copy;{date.getUTCFullYear()} <a href="https://github.com/drregg6" target="_blank">Dave Regg</a>
            </p>
        </footer>
    );
}

const footerStyle = {
    color: '#333',
    background: '#ffa703',
    padding: '15px',
    fontSize: 10
}