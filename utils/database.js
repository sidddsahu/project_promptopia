import mongoose, { mongo } from "mongoose";
let isConnected = false; // track the connection
export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("Monogdb is already connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log('Mongodb Connected')
    } catch (error) {
        console.log(error)
        
    }
}


// CkG0cB7km0SRbnBs