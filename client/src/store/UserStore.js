import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._adminPanel = false
        this._cardsList = false
        this._createTransactions = false
        this._transactionsList = false
        this._createUser = false
        this._userList = false
        this._createCard = false
        this._services = false
        this._currentUserCard = false
        this._currentCardTransactions = false
        this._currentUser = {}
        this._currentCard = {}
        this._role = ''
        this._user = [{id:1,firstName:'Danylo',lastName:'Vlasenko',address:'dfsfsdfdsf',contactNumber:380631779644,blocked:false},
            {id:2,firstName:'Dmitro',lastName:'Drobinko',address:'vxcvxcvxcv',contactNumber:380931769645,blocked:true},
            {id:3,firstName:'Sergiy',lastName:'Slyusar',address:'hgfhfghjf',contactNumber:380841719634,blocked:false},
            {id:4,firstName:'Alina',lastName:'Makarova',address:'yutyutyu',contactNumber:380671849634,blocked:false},
            {id:5,firstName:'Yura',lastName:'Mylomel',address:'qqewqeq',contactNumber:380131769624,blocked:false},]
        makeAutoObservable(this)
    }
    setCurrentCard(currentCard){
        this._currentCard = currentCard
    }
    get currentCard(){
        return this._currentCard
    }
    setCurrentUser(currentUser){
        this._currentUser = currentUser
    }
    get currentUser(){
        return this._currentUser
    }
    setCurrentCardTransactions(bool){
        this._currentCardTransactions = bool
    }
    get currentCardTransactions(){
        return this._currentCardTransactions
    }
    setCurrentUserCard(bool){
        this._currentUserCard = bool
    }
    get currentUserCard(){
        return this._currentUserCard
    }
    setUser(user){
        this._user = user
    }
    get user(){
        return this._user
    }
    setUserList(bool){
        this._userList = bool
    }
    get userList(){
        return this._userList
    }
    setCreateUser(bool){
        this._createUser = bool
    }
    get createUser(){
        return this._createUser
    }
    setTransactionsList(bool){
        this._transactionsList = bool
    }
    get transactionsList(){
        return this._transactionsList
    }
    setCreateTransactions(bool){
        this._createTransactions = bool
    }
    get createTransactions(){
        return this._createTransactions
    }
    setCardsList(bool){
        this._cardsList = bool
    }
    get cardsList(){
        return this._cardsList
    }
    setServices(bool){
        this._services = bool
    }
    get services(){
        return this._services
    }
    setCreateCard(bool){
        this._createCard = bool
    }
    get createCard(){
        return this._createCard
    }
    setAdminPanel(bool){
        this._adminPanel = bool
    }
    get adminPanel(){
        return this._adminPanel
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    get isAuth(){
        return this._isAuth
    }
    setRole(role){
        this._role = role
    }
    get role(){
        return this._role
    }
}