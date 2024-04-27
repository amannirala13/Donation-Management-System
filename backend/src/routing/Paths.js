import PathName from "./PathName.js";
import {sendEmailVerificationLink} from "../auth/SendEmailVerificationLink.js";
import {sendPasswordResetLink} from "../auth/SendPasswordResetLink.js";
import GetCurrentUserProfile from "../profile/GetCurrentUserProfile.js";
import GetCurrentUserReferralNetwork from "../referral/GetCurrentUserReferralNetwork.js";
import { getCampaignById } from "../database/get/getCampaignById.js";
import { getAllCampaigns } from "../database/get/getAllCampaigns.js";
import  {updateCampaignById} from "../database/update/updateCampaignById.js";

export default [

    getPathObj(`/${PathName.checkAuthToken}`,
        (req, res)=>{
                        res.json({authToken: req.authToken, currentUser: req.currentUser, isAdmin: req.isAdmin});
    }),

    getPathObj(`/${PathName.sendEmailVerificationLink}`, sendEmailVerificationLink),
    getPathObj(`/${PathName.getCurrentUserProfile}`, GetCurrentUserProfile),
    getPathObj(`/${PathName.getCurrentUserReferralNetwork}`, GetCurrentUserReferralNetwork),
    getPathObj(`/${PathName.getCampaignById}`, getCampaignById),
    getPathObj(`/${PathName.getAllCampaigns}`, getAllCampaigns),
    getPathObj(`/${PathName.updateCampaignById}`, updateCampaignById),
]



function getPathObj(path: string, action: (Request, Response)=>{}): {path: string, action: (Request, Response)=>{}} {
    return (
        {
            path: path,
            action: action
        }
    )
}