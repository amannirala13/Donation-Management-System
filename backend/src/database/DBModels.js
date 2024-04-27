import {Collections} from "./const/Collections.js";
import {UserModel} from "../models/auth/UserModel.js";
import mongoose from "mongoose";
import {ReferralNetworkModel} from "../models/referral/ReferralNetworkModel.js";
import {Model} from "mongoose";
import {AdminModel} from "../models/auth/AdminModel.js";

const {model} = mongoose;

export const UserMongoModel: Model = model(
    Collections.users,
    UserModel.getSchema());
export const ReferralNetworkMongoModel: Model = model(
    Collections.referralNetworks,
    ReferralNetworkModel.getSchema());
export const AdminMongoModel: Model = model(
    Collections.admins,
    AdminModel.getSchema());