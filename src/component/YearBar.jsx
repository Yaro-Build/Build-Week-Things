import React from "react"
import '../styles/smallBars.css'
import '../styles/SearchBar.css'
import DropDownOpt from './DropDownOpt'

function YearBar({data}){
    return(
        <div>
            <label >Filter by Year: </label>
            <select>
                {
                    data && data.map((infoP,index) => (
                       <DropDownOpt key = {infoP.id} option = {infoP.year} /> 
                    ))
                }
            </select>
        </div>
    )
}

export default YearBar;