import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./component/SearchBars/SearchBar";
import Header from "./component/Header/Header";
import Carousel from "./component/Carousel/Carousel";
import ApiService from "./services/ApiService";

// Main document that outputs things to the webpage
function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log("hook running");
    ApiService.getUsersFromApi().then((data) => {
      console.log("hello data", data);
      setUserData(data);
    });
  }, []);

  console.log("Data is here", userData);

  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Carousel />
        <br />
        {userData && <SearchBar userData={userData} />}
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
