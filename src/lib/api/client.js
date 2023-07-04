import axios from 'axios'
import { getCookie } from '../cookie';

export const client = axios.create({
    baseURL: "http://13.124.83.168:5000",
    headers: {
        'Content-Type': `multipart/form-data`,
        'Authorization': `Bearer ${getCookie('token')}`,
        'withCredentials': true,
    }
});
