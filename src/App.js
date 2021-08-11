import React from 'react';
import Navigation from './components/Navigation'
import Button from './components/PrimaryBtn';
import Buttons from './components/Secondarybtn';
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
