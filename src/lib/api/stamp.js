import axios from "axios";
import { getCookie } from "../cookie";

const config = {
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 스탬프 적립 코드 생성
export const getCode = async (config) => {
    return await axios.post(`${PROXY}/customer/stamp`, {}, config);
};

// 점주 스탬프 적립 승낙
export const postCodeApproval = async (code, config) => {
    return await axios.post(`${PROXY}/owner/stamp`, { randNum: code }, config);
};

// 스탬프 적립 내역 확인
export const checkStamp = async (sort, config) => {
    return await axios.get(`${PROXY}/customer/stamp/${sort}`, {}, config);
};

// 스탬프 참여 매장 조회
export const checkStampStore = async (sort, config) => {
    return await axios.get(`${PROXY}/customer/tour/${sort}`, {}, config);
};

// 배송 신청
export const postDelivery = async (password, name, email, phone, file, config) => {
    return await axios.get(`${PROXY}/customer/delivery`, { password, name, email, phone, file }, config);
};
