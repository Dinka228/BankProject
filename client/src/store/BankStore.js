import {makeAutoObservable} from "mobx";

export default class BankStore {
    constructor() {
        this._cards = [
            {id:1,accountId:1,cardNumber:32424321234,balance:530,currency:'USD', cvv:321,expiryDate:'11-12-2024',status:"activated", cardType:"debit",pin:1111,userId:1},
            {id:2,accountId:1,cardNumber:56756754654,balance:640,currency:'USD', cvv:123,expiryDate:'11-12-2025',status:"blocked", cardType:"credit",pin:2222,userId:2}
        ]
        this._selectCard = {}
        this._transactions = [{id:1,senderCardId:1,receiverCardId:2,date:"13-09-2023",
            amount:500,description:"safdsdfsdf",type:"Transfer", startTime:"10:22",cardId:1,status:'Confirm'},
        ]
        makeAutoObservable(this)
    }
    setTransactions(trans){
        this._transactions = trans
    }
    get transactions(){
        return this._transactions
    }
    setCards(card){
        this._cards = card
    }
    get cards(){
        return this._cards
    }
    setSelectCard(selectCard){
        this._selectCard = selectCard
    }
    get selectCard(){
        return this._selectCard
    }
}