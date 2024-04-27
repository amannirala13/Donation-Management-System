import {UserModel} from "../models/auth/UserModel.js";
import getUserReferralNetwork from "../database/get/getUserReferralNetwork.js";

export default function (req, res){
    if(!req.currentUser)
        return res.status(400).send("User not found");
    const user: UserModel = UserModel.fromObj(req.currentUser);
    getUserReferralNetwork(user.uuid)
        .then((data)=>{
            return res.status(200).json(data);
        })
        .catch((e:Error)=>{
            return res.status(500).send(e.message);
        })
}