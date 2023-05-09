import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LoginPage />} path='/' />
                <Route element={<MainPage />} path='/home' />
            </Routes>
        </BrowserRouter>

    )
}

export default Routers;