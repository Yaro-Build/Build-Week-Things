import React from "react"
import './styles/smallBars.css'
import './styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

const LocBar = ({data}) =>{
    return(
        <div>
            <label >Filter by Location:&nbsp; </label>
            <select style={{borderRadius:"100px",}}>
                {
                    data && data.map((infoP,index) => (
                            <DropDownOpt key = {infoP.id} option = {infoP.location} /> 
                    ))
                }
            </select>                  
        </div>
    )
}

export default LocBar