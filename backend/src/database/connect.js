import mongoose from "mongoose";

/**
 * Connects to MongoDB database
 * @param path
 */
export function connectToDB(path) {
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true }, useNewUrlParser: true,
        useUnifiedTopology: true };

    mongoose.connect(path, clientOptions)
        .then(() => console.log(`Connected to database on ${path}`))
        .catch((e: Error)=>{
            console.error("Database connect error: ", e);
        })
}