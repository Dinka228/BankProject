import {$authHost,$host} from "./index";

export const getAllCards  = async()=>{
    const {data} = await $host.get(`/cards`)
    return data
}
export const getCardById   = async(id)=>{
    const {data} = await $host.get(`/cards/${id}`)
    return data
}
export const createCard   = async(accountId,cardType,cardNumber,expiryDate,cvv,currency,pin)=>{
    const {data} = await $host.post(`/cards/`,{accountId,cardType,cardNumber,expiryDate,cvv,currency,pin})
    return data
}
export const changePin    = async(id,changePIN)=>{
    const {data} = await $host.put(`/cards/${id}/changePin`,changePIN)
    return data
}
export const updateBalance     = async(id,balance)=>{
    const {data} = await $host.put(`/cards/${id}/updateBalance`,balance)
    return data
}
export const deleteCard    = async(id)=>{
    const {data} = await $host.delete(`/cards/${id}`)
    return data
}
export const blockCard    = async(id)=>{
    const {data} = await $host.put(`/cards/${id}/block`)
    return data
}
export const activateCard    = async(id)=>{
    const {data} = await $host.put(`/cards/${id}/activate`)
    return data
}
export const getUserCardTransactions = async(accountId,cardId,userId)=>{
    const {data} = await $host.get(`/accounts/${accountId}/${cardId}/transactions`,userId)
    return data
}
export const getAdminCardTransactions = async(id)=>{
    const {data} = await $host.get(`/cards/${id}/transactions`)
    return data
}
