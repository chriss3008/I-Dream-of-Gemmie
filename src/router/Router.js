// Routes
import { Routes, Route } from "react-router-dom"

// Components
import HomePage from "../pages/HomePage/HomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import GemPage from "../pages/GemPage/GemPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route index element={<ProfilePage />} />
                <Route path="profile/" element={<ProfilePage />} /> 
                <Route path="gem/" element={<GemPage />} /> 
                <Route path="*" element={<ErrorPage />} /> 
                {/* <Route path="details/:id" element={<DetailsPage />} /> 
                <Route path="people/:id" element={<DetailsPageCast />} /> 
                <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
            </>
    )
}

export default Router