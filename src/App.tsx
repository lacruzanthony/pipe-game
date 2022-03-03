import React from 'react';
import logo from './logo.svg';
import './App.css';
import PipeGame from './containers/PipeGame'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PipeGame />
    </div>
  );
}

export default App;
