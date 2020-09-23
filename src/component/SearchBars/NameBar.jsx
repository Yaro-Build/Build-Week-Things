import React from "react"
import '../SearchBars/styles/smallBars.css'
import '../SearchBars/styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

function NameBar({data}){
    return(
        <div> 
            <label> Filter by Name: </label>
			<select>
                {
                    data && data.map((infoP,index) => (
                       <DropDownOpt key = {infoP.id} option = {infoP.name} /> 
                    ))
                }
            </select>
		</div>
    )
}

export default NameBar;