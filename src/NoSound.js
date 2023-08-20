import React from 'react';
import axios from 'axios';
import "./App.css";

const NoSound = () => {
    axios.get("http://localhost:3000/NoSound")
    .then((response)=>{
        console.log(response);
    }).catch((e)=>{
        console.log(e.response.status + " " +e.response.statusText);
    });
  return (
    <div className='center-text'>
    <h1>404</h1>
    <p>NO SOUND FOUND</p>
    <a href='/'>Go Back</a>
    </div>
  )
}

export default NoSound;