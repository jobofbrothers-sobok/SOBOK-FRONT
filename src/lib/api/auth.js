import axios from "axios";
import { client } from "./client";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 로그인
export const customerLogin = async ({ loginId, password }) =>
    await axios.post(`${PROXY}/auth/signin/customer`, { loginId, password })
        .then((res) => console.log('성공', res))
        .catch((err) => console.log('실패', err))

// 고객 로그아웃
export const customerLogout = ({ loginId, password }) =>
    client.get(`${PROXY}/auth/signout/customer`, { loginId, password })

// 고객 회원가입
export const customerJoin = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.post(`${PROXY}/auth/signup/customer`, { loginId, password, name, email, phone, termsAgree, marketingAgree })

// 고객 회원탈퇴
export const customerWithdraw = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.delete(`${PROXY}/auth/customer`, { loginId, password, name, email, phone, termsAgree, marketingAgree })


// 점주 로그인
export const ownerLogin = async ({ loginId, password }) =>
    await axios.post(`${PROXY}/auth/signin/owner`, { loginId, password })
        .then((res) => console.log('성공', res))
        .catch((err) => console.log('실패', err))

// 점주 로그아웃
export const ownerLogout = async ({ loginId, password }) =>
    await axios.post(`${PROXY}/auth/signout/owner`, { loginId, password })
        .then((res) => console.log('성공', res))
        .catch((err) => console.log('실패', err))

// 점주 회원가입
export const ownerJoin = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.post(`${PROXY}/auth/signup/owner`, { loginId, password, name, email, phone, termsAgree, marketingAgree })

// 점주 회원탈퇴
export const ownerWithdraw = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.delete(`${PROXY}/auth/owner`, { loginId, password, name, email, phone, termsAgree, marketingAgree })