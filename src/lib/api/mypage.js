import axios from "axios";
import { client } from "./client";
import { getCookie } from "../cookie";

const config = {
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

// const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy/api';
const PROXY = '/api';

// 찜한 카페 및 작성한 리뷰 조회
export const getCustomerActivity = async (lat, lon, config) => {
    return await axios.post(`${PROXY}/main/mypage`, { x: lat, y: lon }, config)
}

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

// 점주 매장 정보 등록/수정
export const ownerAddStore = async (store, summary, time, dayOff, link, image, checkString, config) => {
    let formData = new FormData();
    formData.append('storeName', store);
    formData.append('description', summary);
    formData.append('officeHour', time);
    formData.append('dayOff', dayOff);
    formData.append('homepage', link);
    formData.append('file', image);
    formData.append('category', checkString);
    return await axios.post(`${PROXY}/owner/store`, formData, config);
}


// 점주 매장 소식 등록
export const ownerAddNews = async (id, category, title, content, file, config) => {
    let formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    return await axios.post(`${PROXY}/owner/store/notice/${id}`, formData, config);
}

// 점주 매장 메뉴 등록
export const ownerAddMenu = async (id, title, content, file, config) => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    return await axios.post(`${PROXY}/owner/store/menu/${id}`, formData, config);
}

// 점주 매장 스토어 상품 등록
export const ownerAddProduct = async (id, category, name, price, discountPrice, url, file, config) => {
    let formData = new FormData();
    formData.append('category', category);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('discountPrice', discountPrice);
    formData.append('url', url);
    formData.append('file', file);
    return await axios.post(`${PROXY}/owner/store/product/${id}`, formData, config);
}

// 점주 소복 매니저 신청
export const postManagerForm = async (category, content, isMessage, isKakao, config) => {
    return await axios.post(`${PROXY}/owner/alim`, { category: category, content: content, isMessage: isMessage, isKakao: isKakao }, config);
};

// 점수 스탬프 사용 신청
export const postownerStamp = async (config) => {
    return await axios.post(`${PROXY}/owner/stamp/request`, {}, config);
};