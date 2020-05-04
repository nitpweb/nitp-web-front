import React from 'react';
import logo from './logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to National Institute of Technology, Patna
        </p>
        <a
          className="App-link"
          href="http://nitp.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Old Website
        </a>
      </header>
    </div>
  );
}

export default App;
