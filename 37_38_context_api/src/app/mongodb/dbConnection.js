import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/product");
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
