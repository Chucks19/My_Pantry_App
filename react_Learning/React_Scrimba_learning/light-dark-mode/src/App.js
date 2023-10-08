import Navbar from './Components/Navbar';
import Main from './Components/Main';
import './App.css';
import React, { useState } from 'react';


function App() {

  const [darkmode, setDarkmode] = useState(true)
  function toggle(){
    setDarkmode(prev => !prev)
  }

  return (
    <React.Fragment>
    <Navbar darkmode={darkmode} toggle = {toggle}/>
    <Main darkmode = {darkmode} />
    </React.Fragment>
  );
}

export default App;
