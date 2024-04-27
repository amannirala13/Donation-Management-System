import {UserMongoModel} from "../DBModels.js";

export function userEmailExists( email: string ): Promise<boolean> {
    return new Promise((resolve, reject)=>{
        UserMongoModel.find({email: email})
            .then((docs)=>{
                if(docs.length)
                    resolve(true);
                else resolve(false);
            }).catch((e: Error)=>{
                reject(e);
        })
    })
}