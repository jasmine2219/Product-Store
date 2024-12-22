import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://JasmineSingh:jasmine1234@cluster0.eeaep.mongodb.net/TuckShop"
    );
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // process code 1 code means exit with failure, 0 means success
  }
};
