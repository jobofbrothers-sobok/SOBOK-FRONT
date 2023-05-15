import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import JoinPage from "./pages/login/JoinPage";
import FindPage from "./pages/login/FindPage";
import SuccessPage from "./pages/login/SuccessPage";
import AdminPage from "./pages/mypage/AdminPage";
import OwnerPage from "./pages/mypage/OwnerPage";
import OwnerManager from "./pages/mypage/OwnerManager";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LoginPage />} path='/' />
                <Route element={<FindPage />} path='/forgot' />
                <Route element={<JoinPage />} path='/join' />
                <Route element={<SuccessPage />} path='/join-success' />
                <Route element={<MainPage />} path='/home' />
                <Route element={<AdminPage />} path='/admin' />
                <Route element={<OwnerPage />} path='/owner' />
                <Route element={<OwnerManager />} path="/owner/manager" />
            </Routes>
        </BrowserRouter>

    )
}

export default Routers;