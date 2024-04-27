import {uuid} from "systeminformation";
import {Schema} from "mongoose";

export class AdminModel{
    get uuid(): string {
        return this._uuid;
    }

    set uuid(value: string) {
        this._uuid = value;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(value: boolean) {
        this._isAdmin = value;
    }

    toObj = ()=>{
        return ({
            uuid: this._uuid,
            isAdmin: this._isAdmin
        });
    }

    static fromObj = (jsonData)=>{
        return new AdminModel(
            jsonData.uuid,
            jsonData.isAdmin
        );
    }

    static getSchema = ()=>{
        return new Schema({
            uuid: String,
            isAdmin: Boolean
        })
    }
    constructor(uuid: string, isAdmin: boolean){

        this._uuid = uuid;
        this._isAdmin = isAdmin;
    }
}