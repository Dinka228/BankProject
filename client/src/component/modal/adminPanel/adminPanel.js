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
import {Context} from "../../../index";
import {useHistory} from "react-router-dom";
import {getAllAccounts} from "../../../http/userAPI";
import {getAllCards} from "../../../http/cardsAPI";
import {getAllTransactions} from "../../../http/transactionsAPI";

const AdminPanel = ({show,onHide}) => {
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
                            <MDBModalTitle>Admin Panel</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBBtn color="info" className='m-2' onClick={()=>{
                                user.setUserList(true)
                                onHide()
                            }
                            }>
                                User Data
                            </MDBBtn>
                            <MDBBtn color="info" className='m-2' onClick={()=>{
                                getAllCards().then(data=>bank.setCards(data))
                                user.setCardsList(true)
                                onHide()
                            }
                            }>
                                Card Data
                            </MDBBtn>
                            <MDBBtn color="info" className='m-2' onClick={()=>{
                                getAllTransactions().then(data=>bank.setTransactions(data))
                                user.setTransactionsList(true)
                                onHide()
                            }
                            }>
                                Transactions Data
                            </MDBBtn>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default AdminPanel;