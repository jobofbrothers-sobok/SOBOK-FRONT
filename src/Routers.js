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
import AdminManager from "./pages/mypage/AdminManager";
import ManagerDetail from "./pages/mypage/ManagerDetail";
import OwnerEditInfo from "./pages/mypage/OwnerEditInfo";
import OwnerEditStoreInfo from "./pages/mypage/OwnerEditStoreInfo";
import OwnerAddNews from "./pages/mypage/OwnerAddNews";
import OwnerAddMenu from "./pages/mypage/OwnerAddMenu";
import OwnerAddStore from "./pages/mypage/OwnerAddStore";
import OwnerMenuDetail from "./pages/mypage/OwnerMenuDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import AdminMenuDetail from "./pages/mypage/AdminMenuDetail";
import MemberDetail from "./pages/mypage/MemberDetail";

const Routers = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<LoginPage />} path='/' />
                <Route element={<FindPage />} path='/forgot' />
                <Route element={<JoinPage />} path='/join' />
                <Route element={<SuccessPage />} path='/join-success' />
                <Route element={<MainPage />} path='/home' />
                <Route element={<AdminPage />} path='/admin' />
                <Route element={<AdminMenuDetail />} path='/admin/menu/:id' />
                <Route element={<MemberDetail />} path='/admin/menu/:id/member/:id' />
                {/* <Route element={<AdminManager />} path='/admin/3' /> */}
                <Route element={<ManagerDetail />} path='/admin/menu/3/detail/:id' />
                <Route element={<OwnerPage />} path='/owner' />
                <Route element={<OwnerMenuDetail />} path='/owner/menu/:id' />
                {/* <Route element={<OwnerEditInfo />} path='/owner/0' />
                <Route element={<OwnerEditStoreInfo />} path='/owner/1' />
                <Route element={<OwnerAddNews />} path='/owner/2' />
                <Route element={<OwnerAddMenu />} path='/owner/3' />
                <Route element={<OwnerAddStore />} path='/owner/4' />
                <Route element={<OwnerManager />} path="/owner/5" /> */}
            </Routes>
        </BrowserRouter>

    )
}

export default Routers;