import {Schema} from "mongoose";
import {DateOfBirth} from "../general/DateOfBirth.js";

export class UserModel{
    get uuid(): string {
        return this._uuid;
    }

    set uuid(value: string) {
        this._uuid = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get middleName(): string {
        return this._middleName;
    }

    set middleName(value: string) {
        this._middleName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get dob(): ?DateOfBirth {
        return this._dob;
    }

    set dob(value: ?DateOfBirth) {
        this._dob = value;
    }

    get isEmailVerified(): boolean {
        return this._isEmailVerified;
    }

    set isEmailVerified(value: boolean) {
        this._isEmailVerified = value;
    }

    get accountStatus(): string {
        return this._accountStatus;
    }

    set accountStatus(value: string) {
        this._accountStatus = value;
    }

    get referralCode(): string {
        return this._referralCode;
    }

    set referralCode(value: string) {
        this._referralCode = value;
    }

    get referredBy(): ?string {
        return this._referredBy;
    }

    set referredBy(value: ?string) {
        this._referredBy = value;
    }

    get registeredOn(): ?Date {
        return this._registeredOn;
    }

    set registeredOn(value: ?Date) {
        this._registeredOn = value;
    }

    get lastLoginOn(): ?Date {
        return this._lastLoginOn;
    }

    set lastLoginOn(value: ?Date) {
        this._lastLoginOn = value;
    }

    get version(): number {
        return this._version;
    }

    set version(value: number) {
        this._version = value;
    }

     toObj = (): {...}=>{
        return{
            uuid: this._uuid,
            email: this.email,
            password: this._password,
            firstName: this._firstName,
            middleName: this._middleName,
            lastName: this._lastName,
            dob: {
                day: this._dob.day,
                month: this._dob.month,
                year: this._dob.year
            },
            accountStatus: this._accountStatus,
            isEmailVerified: this._isEmailVerified,
            referralCode: this._referralCode,
            referredBy: this.referredBy,
            registeredOn: this.registeredOn,
            lastLoginOn: this._lastLoginOn,
            version: this._version
        }
    }

    static fromObj = (jsonData): UserModel =>{
        return (
            new UserModel(
                jsonData.uuid,
                jsonData.email,
                jsonData.password,
                jsonData.firstName,
                jsonData.middleName,
                jsonData.lastName,
                new DateOfBirth(
                    jsonData.dob.day,
                    jsonData.dob.month,
                    jsonData.dob.year),
                jsonData.accountStatus,
                jsonData.isEmailVerified,
                jsonData.referralCode,
                jsonData.referredBy,
                jsonData.registeredOn,
                jsonData.lastLoginOn,
                jsonData.version)
        );
    }

    static getSchema = (): Schema =>{
        return (
            new Schema(
                {
                    uuid: String,
                    email: String,
                    password: String,
                    firstName: String,
                    middleName: String,
                    lastName: String,
                    dob: {day: Number, month: Number, year: Number},
                    accountStatus: String,
                    isEmailVerified: Boolean,
                    referralCode: String,
                    referredBy: String,
                    registeredOn: Date,
                    lastLoginOn: Date,
                    version: Number,
                }
            )
        );
    }

    canBeRegistered = ():boolean =>{
        return(
            this.email !== "" &&
            this.email !== null &&
            this.email !== undefined &&
            this.password !== "" &&
            this.password !== null &&
            this.password !== undefined
        )
    }

    /**
     * Data model for User entity
     * @param uuid
     * @param email
     * @param password
     * @param firstName
     * @param middleName
     * @param lastName
     * @param dob
     * @param isEmailVerified
     * @param accountStatus
     * @param referralCode
     * @param referredBy
     * @param registeredOn
     * @param lastLoginOn
     * @param version
     */
    constructor(
        uuid: string = "",
        email: string = "",
        password: string = "",
        firstName: string = "",
        middleName: string = "",
        lastName: string = "",
        dob:? DateOfBirth = null,
        isEmailVerified: boolean = false,
        accountStatus: string = "",
        referralCode: string = "",
        referredBy:? string = null,
        registeredOn:? Date = null,
        lastLoginOn:? Date = null,
        version: number = 0) {

        this._email = email;
        this._password = password;
        this._firstName = firstName;
        this._middleName = middleName;
        this._lastName = lastName;
        this._dob = dob;
        this._accountStatus = accountStatus;
        this._referralCode = referralCode;
        this._referredBy = referredBy;
        this._registeredOn = registeredOn;
        this._lastLoginOn = lastLoginOn;
        this._uuid = uuid;
        this._version = version;
        this._isEmailVerified = isEmailVerified;

    }
}