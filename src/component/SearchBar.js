import React from "react"
import '../styles/SearchBar.css'

function SearchBar(){
    return(
        <div> 
			<input class = "searchBar" type="text" name="searchBar" placeholder = "Search..."/>
		</div>
    )
}

export default SearchBar