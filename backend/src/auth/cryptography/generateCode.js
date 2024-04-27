import {generate, charset} from "referral-codes"
/**
 * Generates referral codes
 * @param length
 * @param count
 * @returns {Uint8Array}
 */
export function generateCode(length: number = 6, count:number = 1): Uint8Array{
    return generate({
        length: length,
        count: count,
        charset: charset('alphanumeric')
    });
}