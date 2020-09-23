import React from "react";
import "./App.css";
import SearchBar from "./component/SearchBars/SearchBar";
import Header from "./component/Header/Header";
import Carousel from "./component/Carousel/Carousel";
import Profile from "./component/Profile/Profile";
import testData from "./component/Profile/testData";

// Main document that outputs things to the webpage
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Carousel />
        <br />
        <SearchBar />
      </header>

      {/* <div className='profile-container'>
        {testData.map((item, index) => (
          <Profile key={index} profile={item} />
        ))}
      </div> */}
    </div>
  );
}
export default App;
