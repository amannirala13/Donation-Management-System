import axios from "axios";
import {API, API_ROUTES, BASE_URL} from "../const/network.js";
import Cookies from "js-cookie";
import {setAuthTokenCookie} from "../cookies/AuthTokenCookie.js";

export default (email, password)=>{
    return new Promise((resolve, reject)=>{
       API.post(API_ROUTES.LOGIN_USER,
            {
                email: email,
                password: password
            })
            .then((res)=>{
                const data = res.data;
                console.log("Data: ", data);
                if (data.success === true) {
                    console.log("Token: ", data.authToken);
                    setAuthTokenCookie(data.authToken);
                }
                resolve([data.success, data.authToken, data.currentUser]);
            })
            .catch(e=>{
                reject(e);
            })
    })
}