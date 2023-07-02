import axios from "axios";
import { client } from "./client";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 로그인
export const customerLogin = async (id, pw) => {
    return await axios.post(`${PROXY}/auth/signin/customer`, { loginId: id, password: pw });
}

// 고객 로그아웃
export const customerLogout = ({ loginId, password }) => {
    return axios.get(`${PROXY}/auth/signout/customer`)
}

// 고객 회원가입
export const customerJoin = async ({ id, pw, name, tel, email, termsAgree, isSelect }) => {
    return await axios.post(`${PROXY}/auth/signup/customer`, { loginId: id, password: pw, name: name, email: email, phone: tel, termsAgree: termsAgree, marketingAgree: isSelect })
}

// 고객 비밀번호 찾기
export const customerFindpw = ({ status, success, message, data }) =>
    client.post(`${PROXY}/auth/find/customer`, { status, success, message, data })


// 점주 로그인
export const ownerLogin = async (id, pw) => {
    return await axios.post(`${PROXY}/auth/signin/owner`, { loginId: id, password: pw })
}


// 점주 로그아웃
export const ownerLogout = async ({ loginId, password }) => {
    return await axios.get(`${PROXY}/auth/signout/owner`)
}

// 점주 회원가입 
export const ownerJoin = async ({ id, pw, name, email, tel, store, address, detail, code, termsAgree, isSelect }) =>
    await axios.patch(`${PROXY}/auth/signup/owner`, { loginId: id, password: pw, store: store, director: name, email: email, phone: tel, address: address, detailAddress: detail, licenseNumber: code, termsAgree: termsAgree, marketingAgree: isSelect })


// 점주 사업자등록증 전송
export const ownerLicense = async (id, image) => {
    let formData = new FormData();
    formData.append('loginId', id);
    formData.append('file', image);
    return await axios.post(`${PROXY}/auth/signup/owner`, formData);
};

