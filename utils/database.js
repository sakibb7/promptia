import mongoose from "mongoose";

let isConnected = false;

export const connectedToDB = async() => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is connected')
        return;
    }

    try{
        await mongoose.connected(process.env.MONGODB.substring, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })

        isConnected = true;

        console.log('MongoDB connected')
    }catch(error){
        console.log(error)
    }
}