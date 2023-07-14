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
export const getAllCafe = async (lon, lat, checkList, config) => {
    console.log('test', lat, lon, checkList);
    const body = {
        x: lon,
        y: lat,
        category: checkList
    }
    return await axios.get(`${PROXY}/main/store`, body, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

// 카페 찜하기
export const postLike = async (id, config) => {
    return await axios.post(`${PROXY}/main/store/${id}}`, {}, config);
};

// 카페 찜 해제하기
export const deleteLike = async (id, config) => {
    return await axios.delete(`${PROXY}/main/store/${id}`, config);
};

// 카페 상세 정보 조회
export const getCafeInfo = async (storeId, config) => {
    return await axios.get(`${PROXY}/main/store/info/${storeId}`, {}, config);
};

// 카페 상세 소식 조회
export const getCafeNews = async (storeId, query, config) => {
    return await axios.get(`${PROXY}/main/store/notice/${storeId}?query=${query}`, {}, config);
};

// 카페 상세 메뉴 조회
export const getCafeMenu = async (storeId, config) => {
    return await axios.get(`${PROXY}/main/store/menu/${storeId}`, {}, config);
};

// 카페 상세 리뷰 조회
export const getCafeReviews = async (storeId, config) => {
    return await axios.get(`${PROXY}/main/store/review/${storeId}`, {}, config);
};

// 스토어 전체 상품 조회
export const getProducts = async (storeId, config) => {
    return await axios.get(`${PROXY}/main/store/products/${storeId}`, {}, config);
};



