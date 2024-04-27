export class DateOfBirth{
    get day(): number {
        return this._day;
    }

    set day(value: number) {
        this._day = value;
    }

    get month(): number {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }
    getDate = (): Date=>{
        return new Date(
            this.year,
            this.month - 1,
            this.day)
    }

    static fromObj = (json)=>{
        return new DateOfBirth(
            json.day,
            json.month,
            json.year,
        )
    }

    toObj = ()=>{
        return (
            {
                day: this._day,
                month: this._month,
                year: this.year,
            }
        )
    }

    constructor(day: number,  month: number, year: number) {
        this._day = day;
        this._month = month;
        this._year = year;
    }
}