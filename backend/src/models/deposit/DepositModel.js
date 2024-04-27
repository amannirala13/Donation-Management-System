import {Date} from "mongoose";

export class DepositModel{
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get owner(): string {
        return this._owner;
    }

    set owner(value: string) {
        this._owner = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get transactionDate(): Date {
        return this._transactionDate;
    }

    set transactionDate(value: Date) {
        this._transactionDate = value;
    }

    get toWallet(): string {
        return this._toWallet;
    }

    set toWallet(value: string) {
        this._toWallet = value;
    }

    get fromWallet(): string {
        return this._fromWallet;
    }

    set fromWallet(value: string) {
        this._fromWallet = value;
    }

    get currency(): string {
        return this._currency;
    }

    set currency(value: string) {
        this._currency = value;
    }

    get blockId(): string {
        return this._blockId;
    }

    set blockId(value: string) {
        this._blockId = value;
    }

    get comment(): ?string {
        return this._comment;
    }

    set comment(value: ?string) {
        this._comment = value;
    }

    get lastUpdated(): string {
        return this._lastUpdated;
    }

    set lastUpdated(value: string) {
        this._lastUpdated = value;
    }

    get campaignId(): string {
        return this._campaignId;
    }
    
    set campaignId(value: string) {
        this._campaignId = value;
    }
    constructor(
        id: string,
        owner: string,
        amount: number,
        status: string,
        transactionDate: Date,
        toWallet: string,
        fromWallet: string,
        currency: string,
        blockId: string,
        comment:? string,
        lastUpdated: string,
        campaignId: string,
        ) {
        this._id = id;
        this._owner = owner;
        this._amount = amount;
        this._status = status;
        this._transactionDate = transactionDate;
        this._toWallet = toWallet;
        this._fromWallet = fromWallet;
        this._currency = currency;
        this._blockId = blockId;
        this._comment = comment;
        this._lastUpdated = lastUpdated;
        this._campaignId = campaignId;
    }


    
    static getSchema = (): Schema => {
        return new mongoose.Schema({
          id: { type: String, required: true },
          owner: { type: String, required: true },
          amount: { type: Number, required: true },
          status: { type: String, required: true },
          transactionDate: { type: Date, required: true },
          toWallet: { type: String, required: true },
          fromWallet: { type: String, required: true },
          currency: { type: String, required: true },
          blockId: { type: String, required: true },
          comment: { type: String },
          lastUpdated: { type: Date, required: true },
          campaignId: { type: String, required: true },
        });
      };

}