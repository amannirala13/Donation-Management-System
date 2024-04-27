import mongoose from "mongoose";

/**
 * Connects to MongoDB database
 * @param path
 */
export function connectToDB(path: string = 'mongodb://127.0.0.1:27017/capital_express') {
    mongoose.connect(path)
        .then(() => console.log(`Connected to database on ${path}`))
        .catch((e: Error)=>{
            console.error("Database connect error: ", e);
        })
}