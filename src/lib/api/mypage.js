import axios from "axios";
import { client } from "./client";
import { getCookie } from "../cookie";

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 회원 정보 수정
export const customerLogin = async ({ loginId, password }) =>
    await axios.post(`${PROXY}/auth/signin/customer`, { loginId, password })
        .then((res) => console.log('성공', res))
        .catch((err) => console.log('실패', err))


// 고객 회원탈퇴
export const customerWithdraw = (config) => {
    return axios.delete(`${PROXY}/auth/customer`, config)
}


// 점주 회원탈퇴
export const ownerWithdraw = () => {
    return axios.delete(`${PROXY}/auth/owner`, config)
}