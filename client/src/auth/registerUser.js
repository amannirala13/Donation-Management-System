import {API, API_ROUTES} from "../const/network.js";
import {setAuthTokenCookie} from "../cookies/AuthTokenCookie.js";
import UserModel from "../model/UserModel.js";

export default (user = new UserModel())=>{
    return new Promise((resolve, reject)=>{
        API.post(API_ROUTES.REGISTER_USER,
            user.getObject()
        )
            .then((res)=>{
                const data = res.data;
                if (data.success === true)
                    setAuthTokenCookie(data.authToken)
                resolve(res.data);
            })
            .catch(e=>{
                reject(e);
            })
    })
}