import {$authHost,$host} from "./index";

export const createUserTransaction  = async(cardId,userId,transactionDate,amount,description,transactionType,startTime,senderCardId,receiverCardId)=>{
    const {data} = await $host.post(`/accounts/${userId}/${cardId}/createtransaction`, {transactionDate,amount,description,transactionType,startTime,senderCardId,receiverCardId})
    return data
}
export const createAdminTransaction  = async(transactionDate,amount,description,transactionType,startTime,senderCard,receiverCard)=>{
    const {data} = await $host.post(`/transactions`, {transactionDate,amount,description,transactionType,startTime,senderCard,receiverCard})
    return data
}
export const getAllTransactions     = async()=>{
    const {data} = await $host.get(`/transactions`)
    return data
}
export const getTransactionById      = async(id)=>{
    const {data} = await $host.get(`/transactions/${id}`)
    return data
}
export const deleteTransaction       = async(id)=>{
    const {data} = await $host.delete(`/transactions/${id}`)
    return data
}
export const cancelTransaction        = async(id)=>{
    const {data} = await $host.put(`/transactions/${id}/cancel`)
    return data
}
export const confirmTransaction        = async(id)=>{
    const {data} = await $host.put(`/transactions/${id}/confirm`)
    return data
}
