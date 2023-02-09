import React from "react";
import logo from '../../public/assets/airbnb-logo.png'

export default function() {
    return(
        <nav className="nav-bar">
            <img src={logo} alt="AIrbnb logo" className="nav-logo"/>
        </nav>
    )
}