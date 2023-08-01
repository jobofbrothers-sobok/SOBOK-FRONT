import axios from "axios";
import { getCookie } from "../cookie";

const config = {
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
}

// const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy/api';
const PROXY = 'https://b.sobok.co.kr/api';

// 고객 스탬프 적립 코드 생성
export const getCode = async (config) => {
    return await axios.post(`${PROXY}/customer/stamp`, {}, config);
};

// 점주 스탬프 적립 승낙
export const postCodeApproval = async (code, config) => {
    return await axios.post(`${PROXY}/owner/stamp`, { randNum: code }, config);
};

// 스탬프 적립 내역 확인
export const checkStamp = async (tag, config) => {
    return await axios.get(`${PROXY}/customer/stamp?sort=${tag}`, config);
};

// 스탬프 참여 매장 조회
export const checkStampStore = async (tag, config) => {
    return await axios.get(`${PROXY}/customer/tour?sort=${tag}`, config);
};

// 배송 신청
export const postDelivery = async (reward, name, tel, address, detail, message, config) => {
    return await axios.post(`${PROXY}/customer/delivery`, { reward: reward, customer: name, phone: tel, address: address, detailAddress: detail, message: message }, config);
};

// 점주 스탬프 서비스 사용 신청
export const postStampRequest = async (config) => {
    return await axios.post(`${PROXY}/owner/stamp/request`, {}, config);
};
