import React from "react"
import './styles/smallBars.css'
import './styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

const LocBar = ({data}) =>{
    return(
        <div>
            <label >Filter by Location: </label>
            <select>
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