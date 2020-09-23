import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import SearchBar from './component/SearchBars/SearchBar'


// Main document that outputs things to the webpage
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBar />
        
      </header>
    </div>
  );
}

export default App;
