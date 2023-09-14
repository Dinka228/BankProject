import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem, MDBCardHeader, MDBCardFooter, MDBInput, MDBBadge, MDBRadio, MDBInputGroup
} from 'mdb-react-ui-kit';
import SelectCard from "../component/modal/selectCard";
import cardPage from './cardPage.jpg'
import {MAIN_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import AdminPanel from "../component/modal/adminPanel/adminPanel";
import CreateCard from "../component/modal/createCard";
import ServicesTransfer from "../component/modal/servicesTransfer";
import {observer} from "mobx-react-lite";
import UserList from "../component/modal/adminPanel/user/userList";
import CreateUser from "../component/modal/adminPanel/user/createUser";
import CardsList from "../component/modal/adminPanel/cards/cardsList";
import CreateTransactions from "../component/modal/adminPanel/transactions/createTransactions";
import TransactionsList from "../component/modal/adminPanel/transactions/transactionsList";
import UserData from "../component/modal/adminPanel/user/userData";
import CardsData from "../component/modal/adminPanel/cards/cardsData";
import TransactionsData from "../component/modal/adminPanel/transactions/transactionsData";
import CurrentUsersCards from "../component/modal/adminPanel/cards/currentUsersCards";
import CurrentCardTransactions from "../component/modal/adminPanel/transactions/currentCardTransactions";
import {changePin, getCardById, getUserCardTransactions} from "../http/cardsAPI";
import {createAdminTransaction, createUserTransaction} from "../http/transactionsAPI";

const Cards = observer(() => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const [selectCardVisible,setSelectCardVisible] = useState(false)
    const [receiverVis,setReceiverVis] = useState(false)
    const [changePINVis,setChangePINVis] = useState(false)
    const [PIN,setPIN] = useState({amount:''})
    const [transactionsData,setTransactionsData] = useState({transactionDate:"",amount:"",description:"",
        transactionType:"",startTime:"",senderCard:"",receiverCard:""})
    useEffect(()=>{
        getUserCardTransactions(user.currentUser.id,bank.selectCard.id,user.currentUser.id).then(data=>bank.setTransactions(data))
    },[])


    function addNewTransactions(){
        const newTrans={
            ...newTrans

        }
        const trans = async ()=>{
            const response = await createUserTransaction(user.selectCard.id,user.currentUser.userId,newTrans.transactionDate,newTrans.amount,newTrans.description,
                newTrans.transactionType,newTrans.startTime,user.selectCard.cardNumber,
                newTrans.receiverCard).
            then(data=> getUserCardTransactions(user.currentUser.id,bank.selectCard.id,user.currentUser.userId).
            then(dataTrans=>bank.setTransactions(dataTrans)))
            console.log(response)

        }
        trans()
        setTransactionsData({transactionDate:"",amount:"",description:"",
            transactionType:"",startTime:"",senderCard:"",receiverCard:""})
    }
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem onClick={()=>{
                                history.push(MAIN_ROUTE)
                            }
                            }>
                                <a href='#'>Profile</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem onClick={()=>{
                                setSelectCardVisible(true)
                            }
                            }>
                                <a href="#">Cards</a>
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4" style={{height:310}}>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={cardPage}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p>{bank.selectCard.cardNumber}</p>
                                <p>{bank.selectCard.balance}$</p>
                                <p>{bank.selectCard.status}</p>
                                <div className="d-flex justify-content-center mb-2">

                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <div className='d-flex justify-content-center mt-1'>
                                    <p style={{fontSize:22}}>History</p>
                                </div>

                                <MDBListGroup flush className="rounded-3">
                                    {
                                        bank.transactions.map(trans=>
                                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                                <div className='ms-2 me-auto'>
                                                    <div className='fw-bold'>{trans.type}</div>
                                                    {trans.amount}$

                                                </div>
                                                <MDBBadge pill light>
                                                    {trans.startTime}
                                                </MDBBadge>

                                            </MDBListGroupItem>
                                        )
                                    }

                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Number</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{bank.selectCard.number}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Expiry Date</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{bank.selectCard.expiryDate}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>CVV</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{bank.selectCard.cvv}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>PIN</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBInputGroup style={{width:160    }}>
                                            {
                                                changePINVis ? <input maxLength={4} className='form-control' placeholder="Balance" type='text'
                                                                      value={PIN.amount}
                                                                      onChange={e => setPIN({...PIN, amount: e.target.value})}
                                                /> :  <MDBCardText className="text-muted">{bank.selectCard.pin}</MDBCardText>
                                            }
                                            {
                                                changePINVis ? <MDBBtn outline onClick={()=>{

                                                    changePin(bank.selectCard.id,PIN.amount).then(data=>{
                                                        getCardById(bank.selectCard.id).then(dataCard=>bank.setSelectCard(dataCard))
                                                    })
                                                }
                                                }>Save</MDBBtn> : <MDBBtn outline style={{width:130, height:30}} className='mx-2' onClick={()=>{
                                                    setChangePINVis(true)
                                                }
                                                }>Change</MDBBtn>
                                            }

                                        </MDBInputGroup>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Type</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{bank.selectCard.type}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4 d-flex justify-content-center"><span className="text-primary font-italic me-1"></span> Transfer between card</MDBCardText>
                                        <div className='mb-3'>
                                            <h6 className="fw-bold">Select card type: </h6>
                                            <MDBRadio name='inlineRadio' id='inlineRadio1' value='Internal' label='Internal' inline onClick={()=>{
                                                setReceiverVis(true)
                                            }
                                            }
                                                      onChange={e => setTransactionsData({...transactionsData, transactionType: e.target.value})}
                                            />

                                            <MDBRadio name='inlineRadio' id='inlineRadio2' value='International' label='International' inline onClick={()=>{
                                                setReceiverVis(false)
                                            }
                                            }
                                                      onChange={e => setTransactionsData({...transactionsData, transactionType: e.target.value})}
                                            />
                                        </div>
                                        {
                                            receiverVis ?  <div className="d-flex flex-row align-items-center mb-4">

                                                <MDBInput maxLength={16} label='ReceiverCard' id='form2' type='text'
                                                          value={transactionsData.receiverCard}
                                                          onChange={e => setTransactionsData({...transactionsData, receiverCard: e.target.value})}
                                                />
                                            </div>
                                                :<div></div>
                                        }


                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBInput label='Amount' id='form3'
                                                      value={transactionsData.amount}
                                                      onChange={e => setTransactionsData({...transactionsData, amount: e.target.value})}
                                            />
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <MDBInput label='Description' id='form4'
                                                      value={transactionsData.description}
                                                      onChange={e => setTransactionsData({...transactionsData, description: e.target.value})}
                                            />
                                        </div>

                                        <MDBBtn className='mb-4' color={"dark"} size={"sm"} onClick={()=>{addNewTransactions()}}>Transfer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            {/*<MDBCol md="6">*/}
                            {/*    <MDBCard className="mb-2">*/}
                            {/*        <MDBCardHeader className='d-flex justify-content-center'>*/}
                            {/*            Services*/}
                            {/*        </MDBCardHeader>*/}
                            {/*        <MDBCardBody>*/}
                            {/*            <div>*/}
                            {/*                <MDBListGroup horizontal className='d-flex justify-content-between'>*/}
                            {/*                    <MDBListGroupItem className='d-flex justify-content-center' style={{width:100,cursor:"pointer"}} onClick={()=>{*/}
                            {/*                        user.setServices(true)*/}
                            {/*                    }*/}
                            {/*                    }>Internet</MDBListGroupItem>*/}
                            {/*                    <MDBListGroupItem className='d-flex justify-content-center' style={{width:100,cursor:"pointer"}} onClick={()=>{*/}
                            {/*                        user.setServices(true)*/}
                            {/*                    }*/}
                            {/*                    }>Mobile</MDBListGroupItem>*/}
                            {/*                    <MDBListGroupItem className='d-flex justify-content-center' style={{width:100,cursor:"pointer"}} onClick={()=>{*/}
                            {/*                        user.setServices(true)*/}
                            {/*                    }*/}
                            {/*                    }>Games</MDBListGroupItem>*/}
                            {/*                </MDBListGroup>*/}

                            {/*                <MDBListGroup horizontal className='d-flex justify-content-between mt-2'>*/}
                            {/*                    <MDBListGroupItem className='d-flex justify-content-center' style={{width:100,cursor:"pointer"}} onClick={()=>{*/}
                            {/*                        user.setServices(true)*/}
                            {/*                    }*/}
                            {/*                    }>TV</MDBListGroupItem>*/}
                            {/*                    <MDBListGroupItem className='d-flex justify-content-center' style={{width:100,cursor:"pointer"}} onClick={()=>{*/}
                            {/*                        user.setServices(true)*/}
                            {/*                    }*/}
                            {/*                    }>Beneficence</MDBListGroupItem>*/}
                            {/*                    <MDBListGroupItem className='d-flex justify-content-center' style={{width:100,cursor:"pointer"}} onClick={()=>{*/}
                            {/*                        user.setServices(true)*/}
                            {/*                    }*/}
                            {/*                    }>Insurance</MDBListGroupItem>*/}
                            {/*                </MDBListGroup>*/}
                            {/*            </div>*/}
                            {/*        </MDBCardBody>*/}
                            {/*    </MDBCard>*/}
                            {/*</MDBCol>*/}
                        </MDBRow>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
            <SelectCard show={selectCardVisible} onHide={()=>{setSelectCardVisible(false)}} />
            <AdminPanel show={user.adminPanel} onHide={()=>{user.setAdminPanel(false)}} />
            <CreateCard show={user.createCard} onHide={()=>{user.setCreateCard(false)}} />
            <ServicesTransfer show={user.services} onHide={()=>{user.setServices(false)}} />
            <UserData show={user.userList} onHide={()=>{user.setUserList(false)}} />
            <CreateUser show={user.createUser} onHide={()=>{user.setCreateUser(false)}} />
            <CardsData show={user.cardsList} onHide={()=>{user.setCardsList(false)}} />
            <CreateTransactions show={user.createTransactions} onHide={()=>{user.setCreateTransactions(false)}} />
            <TransactionsData show={user.transactionsList} onHide={()=>{user.setTransactionsList(false)}} />
            <CurrentUsersCards show={user.transactionsList} onHide={()=>{user.setTransactionsList(false)}} />
            <CurrentCardTransactions show={user.transactionsList} onHide={()=>{user.setTransactionsList(false)}} />


        </section>
    );
});

export default Cards;