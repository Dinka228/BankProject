import React, {useContext, useState} from 'react';
import client from "../user/client.jpg";
import {MDBBtn, MDBInput, MDBInputGroup} from "mdb-react-ui-kit";
import {Card} from "react-bootstrap";
import {Context} from "../../../../index";
import {useHistory} from "react-router-dom";
import cardPage from './cardPage.jpg'
import {
    activateCard,
    blockCard,
    getAdminCardTransactions, getAllCards,
    getUserCardTransactions,
    updateBalance
} from "../../../../http/cardsAPI";
import {getAccountCards} from "../../../../http/userAPI";

const CardsList = ({cards}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const [inputVis,setInputVis] = useState(false)
    const [balance,setBalance] = useState({amount:0})
    function changeBalance(){
        updateBalance(cards.id,balance.amount).then()
    }
    return (
        <Card style={{width:600,height:150,display:"flex",flexDirection:"column"}} className="mt-4" border={"black"}>
            <div className='d-flex'>
                <div className='m-lg-auto'>
                    <img src={cardPage} style={{width:70,height:70}} alt=""/>
                </div>
                <div className="m-lg-auto d-flex flex-column">
                    <div >
                        {
                            cards.number
                        }
                    </div>
                </div>
                <div className="m-lg-auto d-flex flex-column">
                    {
                        inputVis ?
                        <div>
                            <MDBInputGroup style={{width:160    }}>
                                <input className='form-control' placeholder="Balance" type='text'
                                       value={balance.amount}
                                       onChange={e => setBalance({...balance, amount: Number(e.target.value)})}
                                />
                                <MDBBtn outline onClick={()=>{
                                    changeBalance()
                                    setInputVis(false)
                                }
                                }>Save</MDBBtn>
                            </MDBInputGroup>
                        </div>
                            :
                            <div style={{cursor:"pointer"}} onClick={()=>{setInputVis(true)}}>
                                {
                                    cards.balance + '$'
                                }
                            </div>
                    }


                </div>
            </div>

            <div className='d-flex mt-3'>
                <div className="m-lg-auto">
                    <MDBBtn color={"info"} onClick={()=>{
                        getAdminCardTransactions(cards.id).then(data=>bank.setTransactions(data))
                        user.setCurrentCard(cards)
                        user.setCardsList(false)
                        user.setTransactionsList(true)
                    }
                    }>Cards Transactions</MDBBtn>
                </div>
                <div className="m-lg-auto">
                    {!cards.blocked ?
                        <MDBBtn color={"danger"} onClick={()=>{
                            blockCard(cards.id).then()
                            if(user.selectUser.firstName){
                                getAccountCards(user.selectUser.id).then(data=>bank.setCards(data))
                            }else{
                                getAllCards().then(data=>bank.setCards(data))
                            }
                        }
                        }>Block</MDBBtn>
                        :
                        <MDBBtn color={"success"} onClick={()=>{
                            activateCard(cards.id).then()
                            if(user.selectUser.firstName){
                                getAccountCards(user.selectUser.id).then(data=>bank.setCards(data))
                            }else{
                                getAllCards().then(data=>bank.setCards(data))
                            }
                        }
                        }>UnBlock</MDBBtn>
                    }
                </div>
            </div>




        </Card>
    );
};

export default CardsList;