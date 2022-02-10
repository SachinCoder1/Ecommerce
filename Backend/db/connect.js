import Mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

const connectionMongo = async () => {
    try {
        const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0bwxa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
        await Mongoose.connect(URL, { useNewUrlParser: true })
        console.log('database is connected to mongodb')
    } catch (error) {
        console.log("There is an error in connect.js", error.message)
    }

}

export default connectionMongo