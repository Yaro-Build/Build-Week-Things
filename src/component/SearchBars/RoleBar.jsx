import React from "react"
import '../SearchBars/styles/smallBars.css'
import '../SearchBars/styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

function RoleBar({data}){
 
    return(
        <div> 
            <label> Filter by Role: </label>
			<select>
                {
                    data && data.map((infoP,index) => (
                       <DropDownOpt key = {infoP.id} option = {infoP.Role} /> 
                    ))
                }
            </select>
		</div>
    )
}

export default RoleBar;