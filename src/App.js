import React from 'react';
import Navigation from './components/Navigation.js'
import Button from './components/Primarybtn.js';
import Buttons from './components/Secondarybtn.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Button></Button>
     <Buttons></Buttons> 
    </div>
  );
}

export default App;
