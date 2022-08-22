import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import Alert from './Components/Alert';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);


  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {           // to display the alert only for 1.5 sec
      setAlert(null);
    }, 1500);
    }

  const toggleMode = () => {

    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      displayAlert("Dark Mode Enabled!", "success");
    }

    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      displayAlert("Light Mode Enabled!", "success");

    }

  } 

  return (
    
    // <Navbar title="Prateek" about="about ME"/>
    <>
    
  
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert show = {alert}/>
      <div className='conatiner my-3'>
      <Routes>
      
      <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route exact path="/" element={<TextBox heading="Enter the Text to Transform Below" mode = {mode}  displayAlert = {displayAlert}/>}/>  
      
      </Routes>
      </div>
  

    </>
  );
}

export default App;
