import React, {useContext} from 'react';
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

const CreateTransactions = ({show,onHide}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
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
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={16} minLength={16} wrapperClass='mb-4' label='SenderCardNumber' size='lg' id='form6' type='text'/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={16} minLength={16} wrapperClass='mb-4' label='ReceiverCardNumber' size='lg' id='form7' type='text'/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={16} minLength={2} wrapperClass='mb-4' label='Amount' size='lg' id='form7' type='text'/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={100} minLength={2} wrapperClass='mb-4' label='Description' size='lg' id='form7' type='text'/>
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
                            <MDBBtn>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default CreateTransactions;