import React from "react"
import '../SearchBars/styles/smallBars.css'
import '../SearchBars/styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

function YearBar({data}){
    return(
        <div>
            <label >Filter by Year: </label>
            <select>
                {
                    data && data.map((infoP,index) => (
                       <DropDownOpt key = {infoP.id} option = {infoP.Joining_date} /> 
                    ))
                }
            </select>
        </div>
    )
}

export default YearBar;