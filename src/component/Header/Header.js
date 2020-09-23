import React from "react"
import "./Header.css"

function Header() {
    return (
        <div className="container">
            <div className="image"></div>
            <div className="container-header">
                <h1 style={{ color: "#eb7b28" }}>WELCOME TO THE BOOTCAMP </h1>
                <h4 style={{ color: "#0a7496" }}>Here you can find your fellow peers</h4>
            </div>
        </div>
    )
}

export default Header