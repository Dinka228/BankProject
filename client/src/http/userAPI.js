import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async(email,password,firstName,lastName,dateOfBirth,address,contactNumber)=>{
    const {data} = await $host.post('/v1/signup',{email,password,firstName,lastName,dateOfBirth,address,contactNumber})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}
export const signIn = async(email,password)=>{
    const {data} = await $host.post('/v1/signin',{email,password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}
export const getAllAccounts = async()=>{
    const {data} = await $host.get('/accounts')
    return data
}
export const getAccountById = async(id)=>{
    const {data} = await $host.get(`/accounts/${id}`)
    return data
}
export const getAccountByEmail = async(email)=>{
    const {data} = await $host.get(`/accounts/profile`,email)
    return data
}
export const createAccount = async(email,password,firstName,lastName,dateOfBirth,address,contactNumber)=>{
    const {data} = await $host.post(`/accounts`, {email,password,firstName,lastName,dateOfBirth,address,contactNumber})
    return data
}
export const updateAccount = async(id,email,password,firstName,lastName,dateOfBirth,address,contactNumber)=>{
    const {data} = await $host.put(`/accounts/${id}`, {email,password,firstName,lastName,dateOfBirth,address,contactNumber})
    return data
}
export const deleteAccount = async(id)=>{
    const {data} = await $host.delete(`/accounts/${id}`)
    return data
}
export const blockAccount = async(id)=>{
    const {data} = await $host.put(`/accounts/${id}/block`)
    return data
}
export const activeAccount = async(id)=>{
    const {data} = await $host.put(`/accounts/${id}/activate`)
    return data
}
export const getAccountCards = async(id)=>{
    const {data} = await $host.get(`/accounts/${id}/cards`,id)
    return data
}