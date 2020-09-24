import React, { useState } from "react";
import "../SearchBars/styles/SearchBar.css";
import LocBar from "../SearchBars/LocBar";
import NameBar from "../SearchBars/NameBar";
import RoleBar from "../SearchBars/RoleBar";
import YearBar from "../SearchBars/YearBar";
import Profile from "../Profile/Profile";

import "../Profile/profile.css";
import "../../App.css";

const SearchBar = ({ userData }) => {
  const [filteredArray, setFilteredArray] = useState([]);
  
  console.log("dadaataa", userData);
  const searchData = (e) => {
    const value = e.target.value;
    let ourProf = [];

    let arrayVar = userData.filter((item) => {
      if (item.name.toLowerCase().includes(value)) {
        return true;
      }
      if (item.location.toLowerCase().includes(value)) {
        return true;
      }
      if (item.job_title.toLowerCase().includes(value)) {
        return true;
      }
      if (item.bio.toLowerCase().includes(value)) {
        return true;
      }
      return false;
    });
    setFilteredArray(arrayVar);
  };

  const findDups = (arg) => {
    let uniArr = arg.slice().sort();
    let res = [];

    for (let i = 0; i < uniArr.length - 1; i++) {
      if (uniArr[i + 1] == uniArr[i]) {
        res.push(uniArr[i]);
      }
    }
    return res;
  };

  return (
    <div>
      <input
        className='searchBar'
        onChange={(e) => searchData(e)}
        type='text'
        name='searchBar'
        placeholder='Search...'
      />
      <br />
      <br />
      <div className='filter-cont'>
        <LocBar  data={userData} />
        <NameBar data={userData} />
        <YearBar data={userData} />
        <RoleBar data={userData} />
      </div>

      <div className='profile-container'>
        {filteredArray.length > 0
          ? filteredArray.map((item, index) => {
              return <Profile key={index} profile={item} />;
            })
          : userData.map((item, index) => {
              return <Profile key={index} profile={item} />;
            })}
      </div>
    </div>
  );
};

export default SearchBar;
