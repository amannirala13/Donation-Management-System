import express from "express";
import Paths from "./Paths.js";

const Router = express.Router()

Paths.forEach((pathObj: {path: string, action: (Request, Response)=>{}})=>{
    Router.post(pathObj.path, pathObj.action);
})

export default Router;