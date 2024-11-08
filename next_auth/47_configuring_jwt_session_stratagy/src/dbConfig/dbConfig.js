import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/product");
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection error, ", error);
  }
};

export default dbConnect;
