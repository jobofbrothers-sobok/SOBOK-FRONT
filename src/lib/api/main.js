import axios from "axios";
import { getCookie } from "../cookie";

// const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy/api';
const PROXY = '/api';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

// 카페 전체 조회
export const getAllCafe = async (lon, lat, checkList) => {
    console.log('test', lat, lon, checkList);
    return await axios.post(`${PROXY}/main/store`, {
        x: lon,
        y: lat,
        category: checkList
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

// 카페 찜하기
export const postLike = async (id, config) => {
    return await axios.post(`${PROXY}/main/store/${id}`, {}, config);
};

// 카페 찜 해제하기
export const deleteLike = async (id, config) => {
    return await axios.delete(`${PROXY}/main/store/${id}`, config);
};

// 카페 상세 정보 조회
export const getCafeInfo = async (id, config) => {
    return await axios.get(`${PROXY}/main/store/info/${id}`, {}, config);
};

// 카페 상세 소식 조회
export const getCafeNews = async (id, tag, config) => {
    return await axios.get(`${PROXY}/main/store/notice/${id}?query=${tag}`, {}, config);
};

// 카페 상세 메뉴 조회
export const getCafeMenu = async (id, config) => {
    return await axios.get(`${PROXY}/main/store/menu/${id}`, {}, config);
};

// 카페 상세 리뷰 조회
export const getCafeReviews = async (id, config) => {
    return await axios.get(`${PROXY}/main/store/review/${id}`, {}, config);
};

// 카페 리뷰 작성
export const postReview = async (id, title, content, file, config) => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    return await axios.post(`${PROXY}/main/store/review/${id}`, formData, config);
};

// 스토어 전체 상품 조회
export const getProducts = async (tag) => {
    return await axios.get(`${PROXY}/main/store/products?sort=${tag}`, {}, { headers: { 'Content-Type': 'application/json', } });
};

// 전체 매장 소식 조회
export const getAllCafeNews = async (tag, config) => {
    return await axios.get(`${PROXY}/main/notice/all?query=${tag}`, {}, config);
};

// 찜한 매장 소식 조회
export const getLikedCafeNews = async (tag, config) => {
    return await axios.get(`${PROXY}/main/notice/like?query=${tag}`, config);
};

// 문의사항 작성
export const postInquiry = async (user, title, content, config) => {
    return await axios.post(`${PROXY}/main/inquiry?user=${user}`, { title: title, content: content }, config);
};

// 공지사항 전체 조회
export const getAllNotice = async () => {
    return await axios.get(`${PROXY}/main/notice`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

// 공지사항 상세 조회
export const getDetailNotice = async (id) => {
    return await axios.get(`${PROXY}/main/notice/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

// 햄버거 검색
export const postSidebarSearch = async (x, y, keyword, config) => {
    return await axios.post(`${PROXY}/main`, { x: x, y: y, keyword: keyword }, config);
};




