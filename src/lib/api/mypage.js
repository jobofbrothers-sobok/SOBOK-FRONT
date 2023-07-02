import axios from "axios";
import { client } from "./client";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 고객 회원 정보 수정
export const customerLogin = async ({ loginId, password }) =>
    await axios.post(`${PROXY}/auth/signin/customer`, { loginId, password })
        .then((res) => console.log('성공', res))
        .catch((err) => console.log('실패', err))

// 고객 로그아웃
export const customerLogout = ({ loginId, password }) =>
    client.get(`${PROXY}/auth/signout/customer`, { loginId, password })

