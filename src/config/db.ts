import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });
    mongoose.connection.on("error", (error) => {
      console.log("Failed to connect to MongoDB", { error });
    });
    await mongoose.connect(config.mongoURI as string);
  } catch (error) {
    console.log("Failed to connect to MongoDB", { error });
    process.exit(1);
  }
};

export default connectDB;
