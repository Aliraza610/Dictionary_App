import React from 'react';
import axios from 'axios';
import "./App.css"

const FourOhFour = () => {
    axios.get("http://localhost:3000/FourOhFour")
    .then((response)=>{
        console.log(response);
    }).catch((e)=>{
        console.log(e.response.status + " " +e.response.statusText);
    });
  return (
    <div className='center-text'>
        <h1>404</h1>
        <p>NOT FOUND</p>
        <a href='/'>Go Back</a>
    </div>
  )
}

export default FourOhFour;