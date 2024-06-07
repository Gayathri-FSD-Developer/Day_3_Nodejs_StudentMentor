import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose"

// default function to call is to load environment variables from a .env file into the process.env object.
dotenv.config()

const connection = async()=>{
    try {
        //To establish a connection to your MongoDB database
        const ConnectionString = await mongoose.connect(process.env.MONGODBCONNECTIONSTRING)
        console.log("MONGODB connected successfully");
        
    } catch (error) {
        console.log("MongoDb not Connected");
    }
}
export default connection