import React from "react"
import '../styles/smallBars.css'
import '../styles/SearchBar.css'
import DropDownOpt from './DropDownOpt'

function RoleBar({data}){
    return(
        <div> 
            <label> Filter by Role: </label>
			<select>
                {
                    data && data.map((infoP,index) => (
                       <DropDownOpt key = {infoP.id} option = {infoP.role} /> 
                    ))
                }
            </select>
		</div>
    )
}

export default RoleBar;