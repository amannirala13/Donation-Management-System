import TokenFactory from "../auth/jwt/TokenFactory.js";
import {AdminMongoModel, UserMongoModel} from "../database/DBModels.js";

export function authMiddleWare(req, res, next){
    const authToken = req.authToken;
    console.log(authToken);
    if (!authToken)
        return res.status(403).send("Forbidden: Missing authentication token.");

    TokenFactory.verify(authToken, (err: Error, user): any=>{
        if (err) {
            console.error(err)
            return res.status(403).send("ERR 1 Forbidden: Unauthorized request.");
        }

        UserMongoModel.findOne({email: user.email})
            .then((doc)=>{
                req.currentUser = doc;

                AdminMongoModel.findOne({uuid: user.uuid})
                    .then((doc)=>{
                        req.isAdmin = doc?.isAdmin === true;
                        next();
                    })
                    .catch((err: Error)=>{
                        console.error(err);
                        req.isAdmin = false;
                        next();
                    })

            })
            .catch((err: Error)=>{
                console.error(err)
                return res.status(403).send("ERR 2 Forbidden: Unauthorized request.");
            })
    })
}