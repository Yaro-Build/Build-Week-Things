import React from "react"
import '../styles/smallBars.css'
import '../styles/SearchBar.css'

function YearBar(){
    return(
        <div>
            <label >Filter by Location: </label>
            <input class = "searchBar" type="text" name="midBar" placeholder = "Search..."/>
        </div>
    )
}

export default YearBar;
