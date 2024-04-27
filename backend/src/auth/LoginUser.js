import {UserModel} from "../models/auth/UserModel.js";
import {generateAuthToken} from "./GenerateAuthToken.js";
import {UserMongoModel} from "../database/DBModels.js";
import CryptographyFactory from "./cryptography/CryptographyFactory.js";

export function loginUser(req: Request, res: Response){

    const body = req.body;

    // Checking if body was passed in the request
    if(body === null)
        return res.status(401).send("Invalid request");

    // Extracting credentials
    const email = body.email;
    const password = body.password;

    // Validating input
    if(!email || !password)
        return res.status(401).send("Invalid parameters");

    // Extracting user data from database and compare the password hash with the password hash extracted from the database
    UserMongoModel.findOne({"email": email})
        .then((data)=>{

            // Checking if user with [ email ] exists
            if (!data)
                return res.status(403).send("Invalid credentials provided");

            const user: UserModel = UserModel.fromObj(data);

            // Verifying password
            CryptographyFactory.verifyPasswordHash(
                password,
                user.password,
                async (e: Error, verified: boolean) => {
                    // Password not verified
                    if (!verified) {
                        console.log(e);
                        return res.status(403).send("Invalid credentials provided");
                    }
                    // Password verified
                    const userObj = user.toObj();
                    //Generating access token
                    const authToken = generateAuthToken(userObj);
                    //Removing critical information from the data to be sent
                    delete userObj.password;

                    //Saving last login time to database

                    data.lastLoginOn = new Date();
                    await data.save();

                    // Sending response with user details and access token
                    return res.status(200).json({
                        success: true,
                        authToken: authToken,
                        currentUser: userObj,
                        timeStamp: new Date()
                    });
                })

        })
        .catch((e: Error)=>{
            console.error(e);
            return res.status(403).send("Invalid credentials provided");
        });
}