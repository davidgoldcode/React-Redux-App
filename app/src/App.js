import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tacos from './components/Tacos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Random Taco Recipe Generator</h2>
      <Tacos />
      </header>
    </div>
  );
}

export default App;
