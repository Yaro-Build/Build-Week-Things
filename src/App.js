import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import SearchBar from './component/SearchBar'
import './styles/SearchBar.css'


// Main document that outputs things to the webpage
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBar />
        <br />
        <SearchBar id="leftBar"/>
        
        
      </header>
    </div>
  );
}

export default App;