import TokenFactory from "./jwt/TokenFactory.js";
import type {UserModel} from "../models/auth/UserModel.js";

export function generateAuthToken(user: {...}){
    return TokenFactory.generate(user);
}


