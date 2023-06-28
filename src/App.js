import logo from './logo.svg';
import './App.css';
import Gamearea from './gamearea'
import Display from './display';
import React from 'react';
import { useState } from 'react';
function App() {
  let [flag,setflag]=useState(false);
  
  let disgamearea=(copyflag)=>{
   setflag(copyflag);
    
  }
  return(
    <div style={{display:'flex'}}>
    { flag==true && <Gamearea/>}
      <Display disgamearea={disgamearea}/>
    
     
    </div>
    
  )
  
}

export default App;
