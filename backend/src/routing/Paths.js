import PathName from "./PathName.js";
import {sendEmailVerificationLink} from "../auth/SendEmailVerificationLink.js";
import {sendPasswordResetLink} from "../auth/SendPasswordResetLink.js";
import GetCurrentUserProfile from "../profile/GetCurrentUserProfile.js";
import GetCurrentUserReferralNetwork from "../referral/GetCurrentUserReferralNetwork.js";

export default [

    getPathObj(`/${PathName.checkAuthToken}`,
        (req, res)=>{
                        res.json({authToken: req.authToken, currentUser: req.currentUser, isAdmin: req.isAdmin});
    }),

    getPathObj(`/${PathName.sendEmailVerificationLink}`, sendEmailVerificationLink),
    getPathObj(`/${PathName.getCurrentUserProfile}`, GetCurrentUserProfile),
    getPathObj(`/${PathName.getCurrentUserReferralNetwork}`, GetCurrentUserReferralNetwork),
]



function getPathObj(path: string, action: (Request, Response)=>{}): {path: string, action: (Request, Response)=>{}} {
    return (
        {
            path: path,
            action: action
        }
    )
}