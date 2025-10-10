import React from 'react';

function Child(props) {
    const childStyle = {
        marginTop: '20px',
        fontSize: '18px',
        color: '#333',
    };

    return (
        <div style={childStyle}>
            <h2>Hello, {props.name}!</h2>
            <p>You are {props.age} years old.</p>
            <p>You live in {props.city}.</p>
        </div>
    );
}

export default Child;