
// React
import React, { useState, useEffect } from "react";

// Router
import { goToProfilePage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

// Code
const HomePage = () => {

    // States and Constants 
    const navigate = useNavigate()


    const onClickProfile = () => {
        goToProfilePage(navigate)
    }

    return (
        <a>       
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>    
            <button onClick={onClickProfile}>Go to Profile</button>
        </a>
    )
}

export default HomePage
