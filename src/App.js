import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import * as ReactDOM from "react-dom/client";
import React from 'react';



function App() {
   const[alert, setAlert] = useState('Null')
   const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

   }
  return (
   <>
   <Navbar title = "TextApp"/>
   <Alert alert = {alert}/>
   <div className="container"><TextForm showAlert = {showAlert} text = "Enter your text here"/></div>
   </>
  );
}

export default App;
