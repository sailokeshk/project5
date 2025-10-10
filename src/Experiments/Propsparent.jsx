import React from 'react';
import Child from './Propschild'; 

function Parent() {
    const parentStyle = {
        textAlign: 'center',  
    };

    return (
        <div style={parentStyle}>
            <h1>Welcome to the Parent Component!</h1>
            <Child name="Jiya" age={25} city="New York" />
        </div>
    );
}

export default Parent;