import express from "express";
import * as bodyParser from "express";
import * as dotenv from "dotenv";
import {loginUser} from "./auth/LoginUser.js";
import {registerUser} from "./auth/RegisterUser.js";
import {authHeaderMiddleWare} from "./middleware/header/AuthHeaderMiddleWare.js";
import {authMiddleWare} from "./middleware/AuthMiddleWare.js";
import SystemInfo from "./SystemInfo.js";
import Router from "./routing/Router.js";
import PathName from "./routing/PathName.js";
import database from "./database/index.js";
import cors from "cors";
import {sendPasswordResetLink} from "./auth/SendPasswordResetLink.js";


// Init express app and defining PORT number
const app = express();
const PORT = 8080;

// Using body parser to extract POST request body
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://172.20.10.2:5173", "https://2628-2409-40f4-2a-c613-e984-5277-5306-12cd.ngrok-free.app"]
}));


app.post(`/${PathName.login}`, loginUser);
app.post(`/${PathName.register}`, registerUser);
app.post(`/${PathName.sendPasswordResetLink}`, sendPasswordResetLink);

// Using AuthPage middlewares
app.use(authHeaderMiddleWare);
app.use(authMiddleWare);

// Using router post AuthPage middlewares
app.use("/", Router);

// Environment variables config
dotenv.config();

// Connecting to MongoDB
database();

// Starting server
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
    //console.log(SystemInfo.getSystemDetailChart(PORT));
})