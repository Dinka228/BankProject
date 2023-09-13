import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async(email,password,firstName,lastName,dateOfBirth,address,contactNumber)=>{
    const {data} = await $host.post('/v1/signup',{email,password,firstName,lastName,dateOfBirth,address,contactNumber})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}
export const login = async(email,password)=>{
    const {data} = await $host.post('/v1/signin',{email,password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}