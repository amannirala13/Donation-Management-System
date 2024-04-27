import {API, API_ROUTES, AUTH_HEADER} from "../const/network.js";

export default (token)=>{
    return new Promise((resolve, reject)=>{
        API.post(API_ROUTES.GET_CURRENT_USER_PROFILE, null, AUTH_HEADER)
            .then((res)=>{
                resolve(res.data)
            })
            .catch((e)=>{
                reject(e);
            })
    })
}