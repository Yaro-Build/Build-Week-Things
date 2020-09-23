import React from "react"
import '../SearchBars/styles/SearchBar.css'
import LocBar from '../SearchBars/LocBar'
import NameBar from '../SearchBars/NameBar'
import RoleBar from '../SearchBars/RoleBar'
import YearBar from '../SearchBars/YearBar'

import dataR from '../../dataCol/dataR'

import '../../App.css';


const SearchBar = () => {

    const ourNames = ["Yaro", "Amy", "Bob"]
    const [filteredArray, setFilteredArray] = React.useState([])

    const searchData = (e) => {
        // let input = document.getElementsByClass("searchBar").value;
        // input = input.toLowerCase();
        //console.log(e)
        const value = e.target.value;
        //console.log(value, "Input")

        let arrayVar = ourNames.filter((name) => {
            return (name.toLowerCase().includes(value))
        }).map((name) => {
            return name
        })

        setFilteredArray(arrayVar)
        console.log(filteredArray)

        /* for ( var i= 0; i < ourNames.length; i++){
            if(!ourNames[i].toLowerCase().includes(value)){
                //ourNames[i].style.display = "none";
                //ourNames[i] = "none";
                console.log("None")
            } else {
                //ourNames[i].style.display = 'list.item';
                //ourNames[i] = 'list.item';
                console.log(value,"else input")
            }
        } */
    }
    // <LocBar />
    
    console.log(dataR)
    return (
        <div>
            <input className="searchBar" onChange={(e) => searchData(e)} type="text" name="searchBar" placeholder="Search..." />
            <br />
            <br />
             <div class = "filter-cont"> 
                <LocBar data = {dataR}/>
                <NameBar data = {dataR}/>
                <YearBar data = {dataR}/>
                <RoleBar data = {dataR}/>
            </div>  

            {filteredArray.length > 0 ? filteredArray.map((name,index) => {
                return <p key = {index}>{name}</p>
            })
                :
                ourNames.map((name,index) => { return <p key = {index} >{name}</p> })}
        </div>
    )
}

export default SearchBar