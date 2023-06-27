import axios from 'axios'
import { getCookie } from '../cookie';

export const client = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'Authorization': `Bearer ${getCookie('is_login')}`,
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': ['https://localhost:3000', 'http://localhost:3000'],
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'withCredentials': true,
    }
});
