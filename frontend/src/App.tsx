import React from 'react';
import './App.css';
import ShoutList from './components/ShoutList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>SHOUT OUTS WOOOO</h1>
      <ShoutList/>
    </div>
  );
}

export default App;
