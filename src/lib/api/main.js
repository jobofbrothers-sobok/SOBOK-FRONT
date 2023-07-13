import axios from "axios";

// const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy/api';
const PROXY = '/api';

// 카페 찜하기
export const postLike = async (storeId, config) => {
    return await axios.post(`${PROXY}/main/store/${storeId}}`, {}, config);
};

// 카페 찜 해제하기
export const deleteLike = async (storeId, config) => {
    return await axios.delete(`${PROXY}/main/store/${storeId}`, config);
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



