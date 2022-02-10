import axios from "axios";

const url = "https://ecommercebackend4.herokuapp.com"

export const signupAuthen = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)

    } catch (error) {
        console.log('500')

    }
}


export const loginAuthen = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)

    } catch (error) {
        console.log('500')

    }
}


export const payUsingPaytm = async (data)=>{
    try {
        let response = await axios.post(`${url}/payment`, data)
        return response.data;
        
    } catch (error) {
        console.log('500')
    }
}