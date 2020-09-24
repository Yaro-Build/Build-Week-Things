import React from "react"
import '../SearchBars/styles/smallBars.css'
import '../SearchBars/styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

function RoleBar({data}){
 
    return(
        <div> 
            <label> Filter by Role:&nbsp; </label>
            <select style={{borderRadius:"100px",}}>
                {
                    data && data.map((infoP,index) => (
                       <DropDownOpt key = {infoP.id} option = {infoP.job_title} /> 
                    ))
                }
            </select>
		</div>
    )
}

export default RoleBar;