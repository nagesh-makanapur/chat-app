import mongoose from "mongoose";

// Function to connect to the Mongodb database
export const connectDB =async () =>{
    try{
        mongoose.connection.on('connected',()=> console.log('Database Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/ChatApp`)
    } catch(error){
        console.log(error);
    }
}