import newUser from "../model/userSchema.js"


export const Signup = async (req, res) => {
    try {
        const isExist = await newUser.findOne({ userName: req.body.userName })
        if (isExist) {
            res.status(401).json("username already existed!")
        }
        const user = req.body;
        const new_user = new newUser(user)
        await new_user.save()

        res.status(200).json("Signup successful, User created in db")

    } catch (error) {
        console.log("Error occured")
    }
}




export const Login = async (req, res) => {
    try {
        const isExist = await newUser.findOne({ userName: req.body.userName, password: req.body.password })
        if (isExist) {
            res.status(200).json(`${req.body.userName} user logged in succesfull`)
        } else {

            res.status(400).json("Invalid login details, try again")
        }

    } catch (error) {
        console.log("Error")
    }
}