import client from "./client";
// import axios from "axios";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 로그인
export const login = ({ loginId, password }) =>
    client.post(`${PROXY}/auth/singin/customer`, { loginId, password })

// 고객 로그아웃
export const logout = ({ loginId, password }) =>
    client.get(`${PROXY}/auth/singout/customer`, { loginId, password })

// 고객 회원가입
export const customerJoin = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.post(`${PROXY}/auth/signup/customer`, { loginId, password, name, email, phone, termsAgree, marketingAgree })

// 고객 회원탈퇴
export const customerWithdraw = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.delete(`${PROXY}/auth/customer`, { loginId, password, name, email, phone, termsAgree, marketingAgree })

// 점주 회원가입
export const ownerJoin = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.post(`${PROXY}/auth/signup/owner`, { loginId, password, name, email, phone, termsAgree, marketingAgree })

// 점주 회원탈퇴
export const ownerWithdraw = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.delete(`${PROXY}/auth/owner`, { loginId, password, name, email, phone, termsAgree, marketingAgree })