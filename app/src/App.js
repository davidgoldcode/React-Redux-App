import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tacos from './components/Tacos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Random Taco Recipe Generator</h2>
      <img src='https://iamnm.com/wp-content/uploads/2016/10/taco.png' alt='delicious taco'></img>
      <Tacos />
      </header>
    </div>
  );
}

export default App;
