export default function ( param = {
    uid: null,
    email: "",
    password: null,
    firstName: "",
    middleName: "",
    lastName: "",
    dob: {day: null, month: null, year: null},
    address: "",
    referralCode: null,
    referredBy: null,
}) {

    this.uid = param.uid;
    this.email = param.email;
    this.password = param.password;
    this.firstName = param.firstName;
    this.middleName = param.middleName;
    this.lastName = param.lastName;
    this.dob = param.dob;
    this.address = param.address;
    this.referralCode = param.referralCode;
    this.referredBy = param.referredBy;

    this.getObject = ()=>{
        return(
            {
                uid: this.uid,
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                middleName: this.middleName,
                lastNam: this.lastName ,
                dob: this.dob,
                address: this.address,
                referralCode: this.referralCode,
                referredBy: this.referredBy,
            }
        )
    }

}