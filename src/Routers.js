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
import StampMain from "./pages/stamp/customer/StampMain";
import StampCode from "./pages/stamp/customer/StampCode";
import StampCheck from "./pages/stamp/customer/StampCheck";
import StampReward from "./pages/stamp/customer/StampReward";
import RewardForm from "./pages/stamp/customer/RewardForm";
import NoApproval from "./pages/stamp/owner/NoApproval";
import StampOwner from "./pages/stamp/owner/StampOwner";
import InputCode from "./pages/stamp/owner/InputCode";
import NewsPage from "./pages/main/NewsPage";
import StorePage from "./pages/main/StorePage";

const Routers = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* 메인페이지 */}
                <Route element={<MainPage />} path='/main' />
                <Route element={<CafeDetail />} path='/detail/:id' />
                <Route element={<NewsPage />} path='/news' />
                <Route element={<StorePage />} path='/store' />
                {/* 회원가입&로그인 */}
                <Route element={<LoginPage />} path='/' />
                <Route element={<FindPage />} path='/forgot' />
                <Route element={<JoinPage />} path='/join' />
                <Route element={<SuccessPage />} path='/join-success' />
                {/* 최고관리자 마이페이지 */}
                <Route element={<AdminPage />} path='/admin' />
                <Route element={<AdminMenuDetail />} path='/admin/menu/:id' />
                <Route element={<MemberDetail />} path='/admin/menu/:id/member/:id' />
                <Route element={<ManagerDetail />} path='/admin/menu/3/detail/:id' />
                <Route element={<DeliveryDetail />} path='/admin/menu/4/detail/:id' />
                <Route element={<AddStampTour />} path='/admin/menu/2/add-stamp-tour' />
                {/* 점주 마이페이지 */}
                <Route element={<OwnerPage />} path='/owner' />
                <Route element={<OwnerMenuDetail />} path='/owner/menu/:id' />
                {/* 일반 사용자 마이페이지 */}
                <Route element={<CustomerPage />} path='/customer' />
                <Route element={<EditCustomerInfo />} path='/customer/edit' />
                <Route element={<LikedCafeList />} path='/customer/liked' />
                <Route element={<MyReviewList />} path='/customer/reviews' />
                {/* 일반 사용자 스탬프 */}
                <Route element={<StampMain />} path='/stamp/customer' />
                <Route element={<StampCode />} path='/stamp/customer/code' />
                <Route element={<StampCheck />} path='/stamp/customer/check' />
                <Route element={<StampReward />} path='/stamp/customer/reward' />
                <Route element={<RewardForm />} path='/stamp/customer/reward/form' />
                {/* 점주 스탬프 */}
                <Route element={<StampOwner />} path='/stamp/owner' />
                <Route element={<NoApproval />} path='/stamp/owner/no-approval' />
                <Route element={<InputCode />} path='/stamp/owner/code' />
            </Routes>
        </BrowserRouter>

    )
}

export default Routers;