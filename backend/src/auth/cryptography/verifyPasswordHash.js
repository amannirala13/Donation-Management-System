import bcrypt from "bcrypt"
export function verifyPasswordHash(
    password: string,
    hash: string,
    next: (Error, boolean)=>{}){

    bcrypt.compare(password, hash, next);
}