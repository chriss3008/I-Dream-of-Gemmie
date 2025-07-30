// Libraries
import React from "react";

// Routes
import { Routes, Route } from "react-router-dom"

// Components
import HomePage from "../pages/HomePage/HomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route index element={<ProfilePage />} />
                <Route path="profile/" element={<ProfilePage />} /> 
                {/* <Route path="details/:id" element={<DetailsPage />} /> 
                <Route path="people/:id" element={<DetailsPageCast />} /> 
                <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
            </>
    )
}

export default Router