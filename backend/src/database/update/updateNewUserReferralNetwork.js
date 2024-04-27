import type {UserModel} from "../../models/auth/UserModel.js";
import {ReferralNetworkMongoModel} from "../DBModels.js";

export default (user: UserModel)=>{
    return new Promise((resolve, reject)=>{
        if(!user.referralCode)
            resolve(false);
        if(!user.referredBy)
            resolve(true);
        ReferralNetworkMongoModel.findOne({referralCode: user.referredBy})
            .then(async (data) => {
                data.level1.push(user.uuid);
                await data.save();
                if(!data.referredBy)
                    resolve(true);
                ReferralNetworkMongoModel.findOne({referralCode: data.referredBy})
                    .then(async (data2) => {
                        data2.level2.push(user.uuid);
                        await data2.save();
                        if(!data2.referredBy)
                            resolve(true);
                        ReferralNetworkMongoModel.findOne({referralCode: data2.referredBy})
                            .then(async (data3) => {
                                data3.level3.push(user.uuid);
                                await data3.save()
                                if(!data3.referredBy)
                                    resolve(true);
                                ReferralNetworkMongoModel.findOne({referralCode: data3.referredBy})
                                    .then(async (data4) => {
                                        data4.level4.push(user.uuid);
                                        await data4.update();
                                        if(!data4.referredBy)
                                            resolve(true);
                                        ReferralNetworkMongoModel.findOne({referralCode: data4.referredBy})
                                            .then(async (data5) => {
                                                data5.level5.push(user.uuid);
                                                await data5.save();
                                                resolve(true);
                                            })
                                            .catch((e:Error)=>{
                                                reject(e);
                                            })
                                    })
                                    .catch((e: Error) => {
                                        reject(e);
                                    })
                            })
                            .catch((e: Error) => {
                                reject(e);
                            })
                    })
                    .catch((e: Error) => {
                        reject(e);
                    })
            })
            .catch((e:Error)=>{
                reject(e);
            })
    })
}