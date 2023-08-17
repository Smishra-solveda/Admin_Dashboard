import mongoose from "mongoose";

const connectToDB = async() => {
    try{
        await mongoose.connect(
            "mongodb+srv://shashwat:11223344@cluster0.8e6yml0.mongodb.net/Admin_Dashboard"
        );
        console.log("connected to db");
    } catch (error){
        console.log(error);
    }
};

export default connectToDB;