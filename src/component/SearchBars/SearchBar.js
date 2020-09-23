import React from "react"
import '../SearchBars/styles/SearchBar.css'
import LocBar from '../SearchBars/LocBar'
import NameBar from '../SearchBars/NameBar'
import RoleBar from '../SearchBars/RoleBar'
import YearBar from '../SearchBars/YearBar'
import Profile from "../Profile/Profile";
import testData from "../Profile/testData";

import dataR from '../../dataCol/dataR'

import '../../App.css';

const SearchBar = () => {

    const ourNames = ["Yaro", "Amy", "Bob"]
    const [filteredArray, setFilteredArray] = React.useState([])

    const searchData = (e) => {
        const value = e.target.value;
        let ourProf = []


        let arrayVar = testData.filter((item) => {
            if(item.Name.toLowerCase().includes(value))
            {
                return true;
            }
            if(item.Location.toLowerCase().includes(value)){
                return true;
            }
            if(item.Role.toLowerCase().includes(value)){
                return true;
            }
            if(item.Bio.toLowerCase().includes(value)){
                return true;
            }
            return false; 
        })
        setFilteredArray(arrayVar)
    }

    return (
        <div>
            <input className="searchBar" onChange={(e) => searchData(e)} type="text" name="searchBar" placeholder="Search..." />
            <br />
            <br />
            <div className="filter-cont">
                <LocBar data={dataR} />
                <NameBar data={dataR} />
                <YearBar data={dataR} />
                <RoleBar data={dataR} />
            </div>

            {filteredArray.length > 0 ?
                filteredArray.map((item, index) => {
                    return (
                        <Profile key = {index} profile = {item}/>
                    )
                })
                :
                testData.map((item, index) => {
                    return (
                        <Profile key = {index} profile = {item}/>
                    )
                })
            }
        </div>
    )
}

export default SearchBar