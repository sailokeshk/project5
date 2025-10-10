
import React from 'react'
import {useState} from 'react'

const Usestatehooks = () => {
    const [city,setCity]=useState('Kurnool');
    console.log(city);
   const changeCity = () => {
    if (city === 'Kurnool') {
      setCity('Hyderabad');
    } else {
      setCity('Delhi');
    }
  };

  return (
    <div>
      <h2>City: {city}</h2>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
}

export default Usestatehooks;
