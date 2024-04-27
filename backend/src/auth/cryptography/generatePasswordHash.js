import bcrypt from "bcrypt";
/**
 *
 * @param password
 * @param saltRounds
 * @param next
 */
export function generatePasswordHash (password: string,
                                      saltRounds: number = 12,
                                      next: (Error, string)=>{}){
    bcrypt.hash(password, saltRounds, next);
}