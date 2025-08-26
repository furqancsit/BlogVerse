import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        let connection = await mongoose.connect(`mongodb://localhost:27017/`)
        console.log(`mogodb connected !!  : ${connection.connection.host}`);

    } catch (error) {

        console.log("MONGODB connection FAILED", error);
        process.exit(1)


    }

}
