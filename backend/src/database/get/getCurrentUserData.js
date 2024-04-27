import {UserMongoModel} from "../DBModels.js";
import {UserModel} from "../../models/auth/UserModel.js";

export default function (id: String): Promise<UserModel|null>{
    return new Promise((resolve, reject)=>{
        if(id === "" || id === null || id === undefined)
            resolve(null);
        UserMongoModel.findOne({uuid: id})
            .then((doc)=>{
                const user: UserModel = UserModel.fromObj(doc);
                const userObj = user.toObj();
                delete userObj?.password;
                resolve(userObj);
            })
            .catch((e:Error)=>{
                reject(e);
            })
    })
}