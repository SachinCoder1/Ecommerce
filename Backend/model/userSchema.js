import Mongoose from "mongoose";

const userShema = Mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 4,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        min: 4,
        max: 20

    },
    userName: {
        type: String,
        required: true,
        unique: true,
        index: true,
        min: 4,
        max: 20

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        }

}) 

const newUser = Mongoose.model('signup-user', userShema);

export default newUser;