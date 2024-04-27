import {Schema} from "mongoose";
import {Date} from "mongoose";

export class ReferralNetworkModel {
    get referredBy():? string {
        return this._referredBy;
    }

    set referredBy(value:? string) {
        this._referredBy = value;
    }
    get referralCode(): string {
        return this._referralCode;
    }

    set referralCode(value: string) {
        this._referralCode = value;
    }
    get owner(): string {
        return this._owner;
    }

    set owner(value: string) {
        this._owner = value;
    }

    get level1(): [string] {
        return this._level1;
    }

    set level1(value: [string]) {
        this._level1 = value;
    }

    get level2(): [string] {
        return this._level2;
    }

    set level2(value: [string]) {
        this._level2 = value;
    }

    get level3(): [string] {
        return this._level3;
    }

    set level3(value: [string]) {
        this._level3 = value;
    }

    get level4(): [string] {
        return this._level4;
    }

    set level4(value: [string]) {
        this._level4 = value;
    }

    get level5(): [string] {
        return this._level5;
    }

    set level5(value: [string]) {
        this._level5 = value;
    }

    get lastUpdated(): Date {
        return this._lastUpdated;
    }

    set lastUpdated(value: Date) {
        this._lastUpdated = value;
    }

    static fromObj = (jsonData): ReferralNetworkModel =>{
        return(
            new ReferralNetworkModel(
                jsonData.owner,
                jsonData.referralCode,
                jsonData.referredBy,
                jsonData.level1,
                jsonData.level2,
                jsonData.level3,
                jsonData.level4,
                jsonData.level5,
                jsonData.lastUpdated
            )
        );
    }

    toObj = (): {...} =>{
        return{
            owner: this._owner,
            referralCode: this._referralCode,
            referredBy: this._referredBy,
            level1: this._level1,
            level2: this._level2,
            level3: this._level3,
            level4: this._level4,
            level5: this._level5,
            lastUpdated: this._lastUpdated
        }
    }

    static getSchema = (): Schema =>{
        return(
            new Schema(
                {
                    owner: String,
                    referralCode: String,
                    referredBy: String,
                    level1: [String],
                    level2: [String],
                    level3: [String],
                    level4: [String],
                    level5: [String],
                    lastUpdated: Date
                }
            )
        );
    }

    /**
     *
     * @param owner
     * @param referralCode
     * @param referredBy
     * @param level1
     * @param level2
     * @param level3
     * @param level4
     * @param level5
     * @param lastUpdated
     */
    constructor(
        owner: string,
        referralCode: string,
        referredBy:? string,
        level1: [string],
        level2: [string],
        level3: [string],
        level4: [string],
        level5: [string],
        lastUpdated: Date) {

        this._owner = owner;
        this._level1 = level1;
        this._level2 = level2;
        this._level3 = level3;
        this._level4 = level4;
        this._level5 = level5;
        this._lastUpdated = lastUpdated;
        this._referralCode = referralCode;
        this._referredBy = referredBy;
    }
}