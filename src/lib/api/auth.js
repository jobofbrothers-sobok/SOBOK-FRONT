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
export const customerJoin = async ({ loginId, password, name, email, phone, marketingAgree }) =>
    await axios.post(`${PROXY}/auth/signup/customer`, { loginId, password, name, email, phone, marketingAgree })

// 고객 회원탈퇴
export const customerWithdraw = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.delete(`${PROXY}/auth/customer`, { loginId, password, name, email, phone, termsAgree, marketingAgree })

// 고객 비밀번호 찾기
export const customerFindpw = ({ status, success, message, data }) =>
    client.post(`${PROXY}/auth/find/customer`, { status, success, message, data })


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
export const ownerJoin = async ({ id, pw, name, email, tel, store, address, detail, code, isSelect }) =>
    await axios.post(`${PROXY}/auth/signup/owner`, { loginId: id, password: pw, store: store, director: name, email: email, phone: tel, address: address, detailAddress: detail, licenseNumber: code, marketingAgree: isSelect })

// 점주 사업자등록증 전송
export const ownerLicense = async ({ id, isSelect }) => {
    let body = new FormData();
    body = {
        loginId: id,
        marketingAgree: isSelect
    };
    await axios.post(`${PROXY}/auth/signup/owner`, body)
};

// 점주 회원탈퇴
export const ownerWithdraw = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.delete(`${PROXY}/auth/owner`, { loginId, password, name, email, phone, termsAgree, marketingAgree })