    import mongoose from "mongoose";

    // ✅ Tambahkan baris ini agar tidak error!
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
    }

    let cached = global.mongoose;

    if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
    }

    async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
        bufferCommands: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
    }

    export default connectDB;
