import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://roshnikumari0029:6204391778@cluster0.glx55.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}