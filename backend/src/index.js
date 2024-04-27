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
import * as dns from "dns";


// Init express app and defining PORT number
const app = express();
const PORT = 8080;

// Using body parser to extract POST request body
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://172.20.10.2:5173", "http://172.20.10.2:3000", "http://localhost:3000"]
}));

// These routes doesn't require an auth token to be included in the request for access (for obvious reasons)
app.post(`/${PathName.login}`, loginUser);
app.post(`/${PathName.register}`, registerUser);
app.post(`/${PathName.sendPasswordResetLink}`, sendPasswordResetLink);

// Using AuthPage middlewares
app.use(authHeaderMiddleWare);
app.use(authMiddleWare);

// Using router post AuthPage middlewares -- Needs auth token to be bound in the request for restricted access
app.use("/", Router);

dns.setServers(['8.8.8.8', '8.8.4.4']);

// Environment variables config
dotenv.config();

// Connecting to MongoDB
database(process.env.MONGO_URL);

// Starting server
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
    //console.log(SystemInfo.getSystemDetailChart(PORT));
})