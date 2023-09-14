import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBCol, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle, MDBRadio,
    MDBRow
} from "mdb-react-ui-kit";
import {Context} from "../../../../index";
import {useHistory} from "react-router-dom";
import {registration} from "../../../../http/userAPI";
import {createAdminTransaction} from "../../../../http/transactionsAPI";

const CreateTransactions = ({show,onHide}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const [receiverVis,setReceiverVis] = useState(false)
    const [transactionsData,setTransactionsData] = useState({transactionDate:"",amount:"",description:"",
        transactionType:"",startTime:"",senderCard:"",receiverCard:""})

    function addNewTransactions(){
        const newTrans={
            ...transactionsData

        }
        const trans = async ()=>{
            const response = await createAdminTransaction(newTrans.transactionDate,newTrans.amount,newTrans.description,
                newTrans.transactionType,newTrans.startTime,newTrans.senderCard,
                newTrans.receiverCard)
            console.log(response)

        }
        trans()
        setTransactionsData({transactionDate:"",amount:"",description:"",
            transactionType:"",startTime:"",senderCard:"",receiverCard:""})
    }
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
                            <MDBModalTitle>Creating Transactions</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {/*<MDBRow>*/}
                            {/*    <MDBCol md='6' className='mb-4'>*/}
                            {/*        <h6 className="fw-bold">Select card type: </h6>*/}
                            {/*        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Debit' inline />*/}
                            {/*        <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Credit' inline />*/}
                            {/*    </MDBCol>*/}
                            {/*</MDBRow>*/}
                            {/*<MDBRow>*/}
                            {/*    <MDBCol md='6' className='mb-4'>*/}
                            {/*        <h6 className="fw-bold">Currency: </h6>*/}
                            {/*        <MDBRadio name='inlineRadio1' id='inlineRadio4' value='option3' label='USD' inline />*/}
                            {/*        <MDBRadio name='inlineRadio1' id='inlineRadio5' value='option4' label='EUR' inline />*/}
                            {/*        <MDBRadio name='inlineRadio1' id='inlineRadio6' value='option5' label='UAH' inline />*/}
                            {/*    </MDBCol>*/}
                            {/*</MDBRow>*/}
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
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={16} minLength={16} wrapperClass='mb-4' label='SenderCardNumber' size='lg' id='form6' type='text'
                                              value={transactionsData.senderCard}
                                              onChange={e => setTransactionsData({...transactionsData, senderCard: e.target.value})}
                                    />
                                </MDBCol>
                            </MDBRow>
                            {
                                receiverVis ? <MDBRow>
                                    <MDBCol md='6'>
                                        <MDBInput maxLength={16} minLength={16} wrapperClass='mb-4' label='ReceiverCardNumber' size='lg' id='form7' type='text'
                                                  value={transactionsData.receiverCard}
                                                  onChange={e => setTransactionsData({...transactionsData, receiverCard: e.target.value})}
                                        />
                                    </MDBCol>
                                </MDBRow>
                                    :<div></div>
                            }

                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={16} minLength={2} wrapperClass='mb-4' label='Amount' size='lg' id='form7' type='text'
                                              value={transactionsData.amount}
                                              onChange={e => setTransactionsData({...transactionsData, amount: e.target.value})}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={100} minLength={2} wrapperClass='mb-4' label='Description' size='lg' id='form7' type='text'
                                              value={transactionsData.description}
                                              onChange={e => setTransactionsData({...transactionsData, description: e.target.value})}
                                    />
                                </MDBCol>
                            </MDBRow>


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
                                console.log(user.createCard)
                                user.setCreateCard(false)
                            }}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                addNewTransactions()
                            }
                            }>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default CreateTransactions;