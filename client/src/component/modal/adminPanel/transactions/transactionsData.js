import React, {useContext, useState} from 'react';
import {
    MDBBadge,
    MDBBtn, MDBListGroup, MDBListGroupItem,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import Scrollbar from "react-scrollbars-custom";
import CardsList from "../cards/cardsList";
import {Context} from "../../../../index";
import {useHistory} from "react-router-dom";
import TransactionsList from "./transactionsList";

const TransactionsData = ({show,onHide}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const [searchCheck,setSearchCheck]=useState("")
    return (
        <>
            <MDBModal
                staticBackdrop
                tabIndex="-1"
                show={show}
                onHide={onHide}
            >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{user.currentCard.number ? `${user.currentCard.number} Transactions` : 'Transactions Data'}</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Scrollbar style={{ height: 250 }} noScrollX={true}>
                                <MDBRow>
                                    {/*<MDBInput className='mt-1'*/}
                                    {/*          placeholder="Search"*/}
                                    {/*          onChange={e=>{*/}
                                    {/*              setSearchCheck(e.target.value)*/}
                                    {/*          }}>*/}

                                    {/*</MDBInput>*/}
                                    <MDBListGroup flush className="rounded-3">
                                    {
                                        bank.transactions.filter(transaction=>{
                                            if(user.currentCard.number){
                                                if(+transaction.cardId === +user.currentCard.id){
                                                    return transaction
                                                }
                                            }
                                            else{
                                                return transaction
                                            }
                                        }).map(transaction=>
                                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                                <div className='ms-2 me-auto'>
                                                    <div className='fw-bold'>{transaction.type}</div>
                                                    {transaction.description}

                                                </div>
                                                <div>
                                                    {transaction.amount}$
                                                </div>
                                                <MDBBadge pill light>
                                                    {transaction.startTime}
                                                </MDBBadge>

                                                <div>
                                                    {!transaction.status  ?
                                                        <MDBBtn style={{width:100}} color={"danger"}>Block</MDBBtn>
                                                        :
                                                        <MDBBtn style={{width:100}} color={"success"}>UnBlock</MDBBtn>
                                                    }
                                                    <MDBBtn style={{width:100}} color={"danger"}>Delete</MDBBtn>
                                                </div>
                                            </MDBListGroupItem>
                                        )

                                    }
                                    </MDBListGroup>
                                </MDBRow>
                            </Scrollbar>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                user.setCurrentCard({})
                                onHide()
                                user.setAdminPanel(true)
                            }}>
                                Return to Menu
                            </MDBBtn>
                            <MDBBtn color="secondary" onClick={()=>{
                                user.setCurrentCard({})
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                            <MDBBtn color="secondary" onClick={()=>{
                                user.setCreateTransactions(true)
                                onHide()
                            }}>
                                Create Transactions
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default TransactionsData;