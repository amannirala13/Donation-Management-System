import Cookies from 'js-cookie';
import CookieTags from "./CookieTags.js";
import useAuthToken from "../hooks/useAuthToken.js";
export function setAuthTokenCookie(
        token,
        expires = 0.125,
        secure = false) {
    Cookies.set(
        CookieTags.ACCESS_TOKEN,
        token,
        {expires: expires, secure: secure});
}

export function getAuthToken(){
    return Cookies.get(CookieTags.ACCESS_TOKEN);
}

export function deleteAuthToken(){
    Cookies.remove(CookieTags.ACCESS_TOKEN);
}