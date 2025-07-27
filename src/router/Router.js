// Libraries
import React from "react";

// Routes
import { Routes, Route } from "react-router-dom"

// Components
import HomePage from "../pages/HomePage/HomePage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                {/* <Route path="details/:id" element={<DetailsPage />} /> 
                <Route path="people/:id" element={<DetailsPageCast />} /> 
                <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
            </>
    )
}

export default Router