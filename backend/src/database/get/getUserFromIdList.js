import {UserModel} from "../../models/auth/UserModel.js";
import {UserMongoModel} from "../DBModels.js";

export default function (ids: Array<String>){
    return new Promise((resolve, reject)=>{
        if(!ids)
            resolve(null);
        UserMongoModel.find({uuid:{'$in': ids}})
            .then((docs)=>{
                const list: Array<UserModel> = []
                for(const doc of docs){
                    const user: UserModel = UserModel.fromObj(doc);
                    const userObj = user.toObj();
                    delete userObj?.password;
                    list.push(userObj);
                }
                resolve(list);
            })
            .catch((e:Error)=>{
                reject(e);
            })
    })
}