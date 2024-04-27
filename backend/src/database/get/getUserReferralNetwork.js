import {ReferralNetworkModel} from "../../models/referral/ReferralNetworkModel.js";
import {ReferralNetworkMongoModel} from "../DBModels.js";
import getUserFromIdList from "./getUserFromIdList.js";

export default function (id: String){
    return new Promise((resolve, reject)=>{
        if(id === "" || id === null || id === undefined)
            reject(null);
        ReferralNetworkMongoModel.findOne({owner: id})
            .then((doc)=>{
                const referral: ReferralNetworkModel = ReferralNetworkModel.fromObj(doc);
                const lvl1Promise = getUserFromIdList(referral.level1);
                const lvl2Promise = getUserFromIdList(referral.level2);
                const lvl3Promise = getUserFromIdList(referral.level3);
                const lvl4Promise = getUserFromIdList(referral.level4);
                const lvl5Promise = getUserFromIdList(referral.level5);

                Promise.all(
                    [lvl1Promise, lvl2Promise, lvl3Promise, lvl4Promise, lvl5Promise]
                ).then((result)=>{
                    const lvl1 = result[0];
                    const lvl2 = result[1];
                    const lvl3 = result[2];
                    const lvl4 = result[3];
                    const lvl5 = result[4];

                    resolve({
                        lvl1: lvl1,
                        lvl2: lvl2,
                        lvl3: lvl3,
                        lvl4: lvl4,
                        lvl5: lvl5,
                    });
                })
                .catch((e: Error)=>{
                    reject(e);
                })
            })
            .catch((e: Error)=>{
                reject(e);
            })
    })
}