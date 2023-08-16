import mongoose from "mongoose";

const connectToDB = async() => {
    try{
        await mongoose.connect(
            "mongodb+srv://shashwat:11223344@cluster0.8e6yml0.mongodb.net/"
        );
        console.log("connect to db");
    } catch (error){
        console.log(error);
    }
};

export default connectToDB;