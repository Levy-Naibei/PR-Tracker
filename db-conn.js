import mongoose from "mongoose";

const connectDb = async() => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, options);
        console.log(`MongoDB Connected ${conn.connection.host}`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    };
};

export default connectDb;