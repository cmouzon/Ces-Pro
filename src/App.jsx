import React from 'react';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom";

function App() {
   const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    
    <main>
      <h1>Materials</h1>
       <div class="container">
      <button class="w3-button w3-blue w3-round-xxlarge">Add</button>
    <button class="w3-button w3-red w3-round-xxlarge">Delete</button>
    <div class="row"> 
      <div class="leftCon"> 
      <div class="container">
    <div class="circle"></div>
    <h4 class="sand">Sand</h4>
    <h7>102,234 m3</h7>
       </div></div>
     <div class="rightCon"> 
    <form onSubmit={handleSubmit}>
      <label>Name<br />
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
        
      </label>
      <label>Color 
      <div class="circle1"></div>
      </label>
      <br />
      <label>Enter your age:
        <br />
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      <br />
        <label>Delivery Date
          <br />
        <input 
          type="date" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
          
  
    
       </div>
      
    </div>
       </div>
    </main>
  );
}

export default App;