import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const Connection= async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@booking-app.zm0zauh.mongodb.net/Flipkart?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Database connected Successfully`)
    } catch (error) {
        console.log(`Error while connection to database error is ${error}`)
    }
}
export default Connection