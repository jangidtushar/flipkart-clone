import axios from "axios"

const URL= 'https://rose-zany-hippo.cyclic.app/'

export const authenticateSignup=async(data)=>{
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error while calling signup api",error)
    }
}

export const authenticateLogin = async(data)=>{
    try {
        return await axios.post(`${URL}/login`,data)
    } catch (error) {
        return error.response
    }
}
