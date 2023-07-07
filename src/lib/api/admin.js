import axios from "axios";
import { getCookie } from "../cookie";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

// 점주 회원정보 전체 조회
export const readAllOwner = async (sort, config) => {
    return await axios.get(`${PROXY}/manager/owner?sort=${sort}`, config)
}

// 점주 회원정보 상세 조회
export const readDetailOwner = async (id, config) => {
    return await axios.get(`${PROXY}/manager/owner/${id}`, config)
}

// 점주 회원가입 승인
export const postOwnerApproval = async (id, config) => {
    return await axios.post(`${PROXY}/manager/grant/${id}`, {}, config)
}

// 고객 회원정보 전체 조회
export const readAllClient = async (config) => {
    return await axios.get(`${PROXY}/manager/client`, config)
}

// 고객 회원정보 상세 조회
export const readDetailClient = async (id, config) => {
    return await axios.get(`${PROXY}/manager/client/${id}`, config)
}
