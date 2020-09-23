import React from "react"
import '../styles/smallBars.css'
import '../styles/SearchBar.css'
import DropDownOpt from './DropDownOpt'

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