import mongoose from "mongoose";

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, Promise: null}
}

async function connectDB() {

    if (cached.conn){
        return cached.conn
    }

    if (!cached.Promise){
        const opts = {
            bufferCommands:false
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}
export default connectDB