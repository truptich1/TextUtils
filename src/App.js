import "./App.css";

// import About from "./Components/About";

import Navbar from './Components/Navbar';
import Alert from "./Components/Alert";
import TextForms from "./Components/TextForms";



import React, { useState } from 'react';
 

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  //Whether Dark Mode is ENabled or Not.
  const [mode, setMode] = useState('light');
  
  // setAlert is used for set alert variable
  const [alert, setAlert] = useState(null);

  // slowAlert is our only function which will help us to show alert message
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  } 

  // toggleMode is used of enable or disable dark mode
 
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      
      // background color of Body
    
      document.body.style.backgroundColor  = '#021d32';

      showAlert("Dark mode has been enabled", "success");

      // title dark mode
     // document.title = "TextUtils + Dark Mode";

    //  Gain Attension of Users

    //  setInterval(() =>{
    //   document.title = 'TextUtils is AMazing Mode'
    //  },2000);

    //  setInterval( ()=>{
    //   document.title = 'Install TextUtils Now';
    //  },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

      showAlert("Light mode has been enabled", "success");

      // title Light mode
      // documen.title = "TextUtils + Light Mode";
    }
  }

  return (
    <>

    {/* <Router> */}
      
    <Navbar title ="TextUtils"
    //  aboutText="About"
      mode={mode} toggleMode ={toggleMode}/>

    <Alert alert={alert}/> 
    {/* passing alert */}
    {/* alert is an object */}
    
    <div className="container my-3">

    {/* Set Up React Router  */}
    {/* <Routes> */}

      {/* use exact path = for do exact matching otherwise react do a partial maching  */}
         {/* < Route exact path = "/about" element={<About/>}/> */}
          
        

        {/* <Route exact path = "/" element= { */}
        <TextForms showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} />
        

      {/* </Routes>   */}

      
      
      
      {/* <About/> */}

  </div>

    {/* </Router> */ }
    </>
  );
}

export default App ;
