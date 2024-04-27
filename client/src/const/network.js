import axios from "axios";
import {getAuthToken} from "../cookies/AuthTokenCookie.js";
export const BASE_URL = process.env.VITE_BASE_URL;
export const API = axios.create({
    baseURL: BASE_URL})

export const AUTH_HEADER = { headers: {'Authorization': `Bearer ${getAuthToken()}`} };

export const API_ROUTES = {
    LOGIN_USER: "login",
    REGISTER_USER: "register",
    GET_CURRENT_USER_PROFILE: "get-current-user-profile",
    GET_CURRENT_USER_REFERRAL_NETWORK: "get-current-user-referral-network",
}