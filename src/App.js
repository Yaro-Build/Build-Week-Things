import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import SearchBar from './component/SearchBar'
import NameBar from './component/NameBar'
import YearBar from './component/YearBar'
import LocBar from './component/LocBar'




// Main document that outputs things to the webpage
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBar />
        <br />
        <div className = "filter-cont">
        <NameBar />
        <YearBar />
        <LocBar />
        </div>
        
      </header>
    </div>
  );
}

export default App;
