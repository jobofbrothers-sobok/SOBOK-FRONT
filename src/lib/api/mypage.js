import axios from "axios";
import { client } from "./client";
import { getCookie } from "../cookie";

const config = {
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 회원 정보 수정
export const customerLogin = async ({ loginId, password }) => {
    return await axios.post(`${PROXY}/auth/signin/customer`, { loginId, password })
        .then((res) => console.log('성공', res))
        .catch((err) => console.log('실패', err))
}


// 고객 회원탈퇴
export const customerWithdraw = async (config) => {
    return await axios.delete(`${PROXY}/auth/customer`, config)
}

// 고객 회원정보 찾기 및 비밀번호 초기화 api 명세
export const customerFindpw = async (email) => {
    return await axios.post(`${PROXY}/auth/find/customer`, { email: email });
}

// 점주 회원탈퇴
export const ownerWithdraw = () => {
    return axios.delete(`${PROXY}/auth/owner`, config)
}