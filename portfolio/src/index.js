import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Eliyas";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDOM.render(
  <>
    <p>Created by {name}</p>
    <p style={{color:"red"}}>Copyright {year}</p>
    
  </>, 
document.getElementById("root"));