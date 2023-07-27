import logo from './logo.svg';
import './App.css';
import QuoteGenerator from './componet/quote';
// import React,{useState} from 'react';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 clasName="Center">Quote Generator</h3>
      </header>
     <QuoteGenerator />
    </div>
    </>
  );
}

export default App;
