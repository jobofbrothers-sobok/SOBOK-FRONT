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
export const customerEdit = async (pw, name, email, phone, file) => {
    let formData = new FormData();
    formData.append('password', pw);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('file', file);
    return await axios.post(`${PROXY}/auth/update/customer`, formData, config)
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
export const ownerWithdraw = async () => {
    return await axios.delete(`${PROXY}/auth/owner`, config)
}

// 점주 회원 정보 수정
export const ownerEdit = async (pw, name, email, phone, address, detail, code, licenseImg, profile, config) => {
    let formData = new FormData();
    formData.append('password', pw);
    formData.append('director', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('detailAddress', detail);
    formData.append('licenseNumber', code);
    formData.append('file1', licenseImg);
    formData.append('file2', profile);
    return await axios.post(`${PROXY}/auth/update/owner`, formData, config)
}
