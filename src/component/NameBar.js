import React from "react"
import '../styles/smallBars.css'
import '../styles/SearchBar.css'

function NameBar(){
    return(
        <div> 
            <label> Filter by Name: </label>
			<input class = "searchBar" type="text" name="leftBar" placeholder = "Search..."/>
		</div>
    )
}

export default NameBar;