import axios from "axios";
import { getCookie } from "../cookie";

const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy/api';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

// 점주 회원정보 전체 조회
export const readAllOwner = async (sort, config) => {
    return await axios.get(`${PROXY}/manager/owner?sort=${sort}`, config);
}

// 점주 회원정보 상세 조회
export const readDetailOwner = async (id, config) => {
    return await axios.get(`${PROXY}/manager/owner/${id}`, config);
}

// 점주 회원가입 승인
export const postOwnerApproval = async (id, config) => {
    return await axios.post(`${PROXY}/manager/grant/${id}`, {}, config);
}

// 고객 회원정보 전체 조회
export const readAllClient = async (config) => {
    return await axios.get(`${PROXY}/manager/client`, config);
}

// 고객 회원정보 상세 조회
export const readDetailClient = async (id, config) => {
    return await axios.get(`${PROXY}/manager/client/${id}`, config);
}

// 스탬프 투어 전체 조회
export const getAllStampTour = async (config) => {
    return await axios.get(`${PROXY}/manager/tour`, config);
}

// 스탬프 투어 등록
export const postStampTour = async (keyword, title, reward, cafeList, file, config) => {
    let formData = new FormData();
    formData.append('keyword', keyword);
    formData.append('title', title);
    formData.append('reward', reward);
    formData.append('cafeList', cafeList);
    formData.append('file', file);
    return await axios.post(`${PROXY}/manager/tour`, formData, config);
}

// 스탬프 투어 등록시 매장 검색
export const searchStore = async (keyword, config) => {
    return await axios.get(`${PROXY}/manager/tour/search`, { storeName: keyword }, config);
}

// 배송 신청 전체 조회
export const getDeliveryList = async (config) => {
    return await axios.get(`${PROXY}/manager/delivery`, config);
}

// 배송 신청 상세 조회
export const getDeliveryInfo = async (id, config) => {
    return await axios.get(`${PROXY}/manager/delivery/${id}`, config);
}

// 공지글 등록
export const postNotice = async (title, content, file, config) => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    return await axios.post(`${PROXY}/manager`, formData, config);
}

// 스탬프 사용 회원 전체 조회
export const getAllStampMember = async (config) => {
    return await axios.get(`${PROXY}/manager/stamp`, config);
}

// 스탬프 사용 회원 상세 조회
export const getStampMemberDetail = async (id, config) => {
    return await axios.get(`${PROXY}/manager/stamp/${id}`, config);
}

// 점주 회원가입 승인
export const postStampApproval = async (id, config) => {
    return await axios.post(`${PROXY}/manager/stamp/${id}`, {}, config);
}