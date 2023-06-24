import client from "./client";
// import axios from "axios";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 로그인
export const login = ({ loginId, password }) =>
    client.post(`${PROXY}/customer/signin`, { loginId, password })

// 고객 회원가입
export const join = ({ loginId, password, name, email, phone, termsAgree, marketingAgree }) =>
    client.post(`${PROXY}/customer/signin`, { loginId, password, name, email, phone, termsAgree, marketingAgree })