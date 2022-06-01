import mongoose from "mongoose";

const dbConnect = () => mongoose.connect(process.env.MONGODB_URI);

export default dbConnect;
