import './App.css';
import React from "react";
import Navbar from "./Component/Navbar";
import Home from './Component/Home';
import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Component/SignUp';
import ForgotPassword from './Component/Forgot_password';
import { useState } from 'react';
import Alert from './Component/Alert';


const App = ()=> {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#343a40"
      document.body.style.color="white"
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor="white"  
      document.body.style.color="#343a40"   
    }
  }

  
  return (
    <>
  
    {/* <Login/> */}
    
      <Router>        
        <Navbar toggleMode={toggleMode} mode ={mode}/>
        <Alert alert={alert}/>     
        <Routes>
          <Route exact path="/" element={<Home mode={mode}/>} />
          <Route path="/login" element={<Login mode={mode} showAlert={showAlert}/>} />
          <Route path="/signup" element={<SignUp mode={mode} showAlert={showAlert}/>} />
          <Route path="/forgot_password" element={<ForgotPassword/>} mode={mode} showAlert={showAlert}/>
        </Routes>
      </Router>
    </>
  );
};
export default App;
