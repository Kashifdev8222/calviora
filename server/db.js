import mongoose from 'mongoose';

const globalCache = globalThis;
if (!globalCache.__calvioraMongoose) {
  globalCache.__calvioraMongoose = { conn: null, promise: null };
}

const cached = globalCache.__calvioraMongoose;

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
