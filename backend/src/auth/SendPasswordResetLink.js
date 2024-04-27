import {SendEmail} from "../mail/SendEmail.js";

export function sendPasswordResetLink (req, res){
    console.log("Sending email....")
    SendEmail(
        "I am a test",
        "This is a text test",
        "asdevofficial@gmail.com",
        "Team CE",
        ()=>{
            console.log("This is next");
        }
    )
}