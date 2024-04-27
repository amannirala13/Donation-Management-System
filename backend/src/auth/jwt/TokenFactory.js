import jwt from "jsonwebtoken";

export default {
    /**
     * Generates access token by signing the **[data]** using JWT
     * @param data
     * @param expiresIn
     * @returns {*}
     */
    generate:
        (data: any, expiresIn: string = "3h"): string => {
            return jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn: expiresIn});
    },

    verify: (authToken: string, next: (Error, any)=>{})=>{
        jwt.verify(authToken, process.env.TOKEN_SECRET, next)
    }
}