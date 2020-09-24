import React from "react"
import '../SearchBars/styles/smallBars.css'
import '../SearchBars/styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

function YearBar({data}){
    return(
        <div>
            <label >Filter by Year:&nbsp; </label>
            <select style={{borderRadius:"100px",}}>
                {
                    data && data.map((infoP,index) => (
                       <DropDownOpt key = {infoP.id} option = {infoP.start_date} /> 
                    ))
                }
            </select>
        </div>
    )
}

export default YearBar;