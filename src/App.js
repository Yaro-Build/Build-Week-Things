import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './component/SearchBars/SearchBar'
import Header from './component/Header/Header'
import './styles/SearchBar.css'
import Carousel from './component/Carousel/Carousel'


// Main document that outputs things to the webpage
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Carousel />
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
