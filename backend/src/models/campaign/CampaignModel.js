import { Date } from "mongoose";
 // reusining deposit as Donation

export class CampaignModel {
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

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get goalAmount(): number {
    return this._goalAmount;
  }

  set goalAmount(value: number) {
    this._goalAmount = value;
  }

  get currentAmount(): number {
    return this._currentAmount;
  }

  set currentAmount(value: number) {
    this._currentAmount = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }



  constructor(
    id: string,
    owner: string,
    title: string,
    description: string,
    goalAmount: number,
    currentAmount: number,
    startDate: Date,
    endDate: Date,
    status: string,

  ) {
    this._id = id;
    this._owner = owner;
    this._title = title;
    this._description = description;
    this._goalAmount = goalAmount;
    this._currentAmount = currentAmount;
    this._startDate = startDate;
    this._endDate = endDate;
    this._status = status;

  }



  static getSchema(): any {
    return {
      id: String,
      owner: String,
      title: String,
      description: String,
      goalAmount: Number,
      currentAmount: Number,
      startDate: Date,
      endDate: Date,
      status: String,
    };
  }
}