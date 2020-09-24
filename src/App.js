import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./component/SearchBars/SearchBar";
import Header from "./component/Header/Header";
import Carousel from "./component/Carousel/Carousel";
import Profile from "./component/Profile/Profile";
import testData from "./component/Profile/testData";
import ApiService from "./services/ApiService";

// Main document that outputs things to the webpage
function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log("hook running");
    ApiService.getUsersFromApi().then(data => {
      setUserData(data);
    });
    console.log("Data is here", userData);
  }, [userData])


  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Carousel />
        <br />
        <SearchBar />
      </header>
      <div className='profile-container'>
        {testData.map((item) => (
          <Profile profile={item} />
        ))}
      </div>
    </div>
  );
}
export default App;
