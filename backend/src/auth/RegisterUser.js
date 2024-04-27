import {UserModel} from "../models/auth/UserModel.js";
import CryptographyFactory from "./cryptography/CryptographyFactory.js";
import {generateAuthToken} from "./GenerateAuthToken.js";
import AccountStatus from "../const/AccountStatus.js";
import {ReferralNetworkMongoModel, UserMongoModel} from "../database/DBModels.js";
import {ReferralNetworkModel} from "../models/referral/ReferralNetworkModel.js";
import {userEmailExists} from "../database/check/userEmailExists.js";
import updateNewUserReferralNetwork from "../database/update/updateNewUserReferralNetwork.js";

export async function registerUser(req: Request, res: Response) {

    // Input validation
    const body = req.body;

    console.log(body);

    if (body === null)
        return res.status(401).send("Invalid request");


    const user = UserModel.fromObj(body);

    if (!user.canBeRegistered())
        return res.status(401).send("Invalid parameters");

    const userExists = await userEmailExists(user.email);

    if (userExists)
        return res.status(401).send("User with this email already exists");
    //----------------------------------------

    // Generating security and metadata fields

    CryptographyFactory.generatePasswordHash(user.password,
        12,

        async (err: Error, hash: string) => {

            user.password = hash;

            user.uuid = CryptographyFactory.generateUUID();
            user.referralCode = CryptographyFactory.generateCode(6)[0];
            user.registeredOn = new Date();
            user.lastLoginOn = new Date();
            user.accountStatus = AccountStatus.UNVERIFIED;
            user.amount = 0;
            user.isEmailVerified = false;

            const referralNetwork = new ReferralNetworkModel(
                user.uuid,
                user.referralCode,
                user.referredBy,
                [],
                [],
                [],
                [],
                [],
                new Date());

            // Saving user data, creating user referral network and
            // updating referred user network in the database
            let newUser = null
            let refNet = null
            try{
                newUser = UserMongoModel(user.toObj());
                refNet = ReferralNetworkMongoModel(referralNetwork.toObj());
                await newUser.save();
                await refNet.save();
                await updateNewUserReferralNetwork(user);
            } catch (e){
                await newUser?.deleteOne();
                await refNet?.deleteOne();
                console.error(e);
                return res.status(500).send("ERR 500: Something went wrong. " +
                    "It's not you, it's us. Please report if the issue persists.");
            }
            console.log(
                `Created new user: uuid -> ${user.uuid} | email -> ${user.email}`
            )

            const userObj = user.toObj()
            const authToken: string = generateAuthToken(userObj);

            delete userObj.password;

            return res.status(200).json(
                {
                    success: true,
                    authToken: authToken,
                    currentUser: userObj,
                    timeStamp: new Date()
                })
        })

}