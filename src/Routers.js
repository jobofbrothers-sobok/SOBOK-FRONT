import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import JoinPage from "./pages/login/JoinPage";
import FindPage from "./pages/login/FindPage";
import SuccessPage from "./pages/login/SuccessPage";
import AdminPage from "./pages/mypage/AdminPage";
import OwnerPage from "./pages/mypage/OwnerPage";
import ManagerDetail from "./pages/mypage/ManagerDetail";
import OwnerMenuDetail from "./pages/mypage/OwnerMenuDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import AdminMenuDetail from "./pages/mypage/AdminMenuDetail";
import MemberDetail from "./pages/mypage/MemberDetail";
import AddStampTour from "./pages/mypage/AddStampTour";
import DeliveryDetail from "./pages/mypage/DeliveryDetail";
import CafeDetail from "./pages/detail/CafeDetail";
import CustomerPage from "./pages/mypage/customer/CustomerPage";
import EditCustomerInfo from "./pages/mypage/customer/EditCustomerInfo";
import LikedCafeList from "./pages/mypage/customer/LikedCafeList";
import MyReviewList from "./pages/mypage/customer/MyReviewList";

const Routers = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<MainPage />} path='/main' />
                <Route element={<CafeDetail />} path='/detail/:id' />
                <Route element={<LoginPage />} path='/' />
                <Route element={<FindPage />} path='/forgot' />
                <Route element={<JoinPage />} path='/join' />
                <Route element={<SuccessPage />} path='/join-success' />
                <Route element={<MainPage />} path='/home' />
                <Route element={<AdminPage />} path='/admin' />
                <Route element={<AdminMenuDetail />} path='/admin/menu/:id' />
                <Route element={<MemberDetail />} path='/admin/menu/:id/member/:id' />
                <Route element={<ManagerDetail />} path='/admin/menu/3/detail/:id' />
                <Route element={<DeliveryDetail />} path='/admin/menu/4/detail/:id' />
                <Route element={<AddStampTour />} path='/admin/menu/2/add-stamp-tour' />
                <Route element={<OwnerPage />} path='/owner' />
                <Route element={<OwnerMenuDetail />} path='/owner/menu/:id' />
                <Route element={<CustomerPage />} path='/customer' />
                <Route element={<EditCustomerInfo />} path='/customer/edit' />
                <Route element={<LikedCafeList />} path='/customer/liked' />
                <Route element={<MyReviewList />} path='/customer/reviews' />

            </Routes>
        </BrowserRouter>

    )
}

export default Routers;