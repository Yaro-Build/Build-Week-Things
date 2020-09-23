import React from "react"
import './styles/smallBars.css'
import './styles/SearchBar.css'
import DropDownOpt from '../../dataCol/DropDownOpt'

const LocBar = ({data}) =>{
    console.log(data)
    return(
        <div>
            <label >Filter by Location: </label>
            <select>
                {
                    data && data.map((infoP,index) => (
                        console.log(infoP),
                            <DropDownOpt key = {infoP.id} option = {infoP.loc} /> 
                    ))
                }
            </select>                  
        </div>
    )
}

export default LocBar