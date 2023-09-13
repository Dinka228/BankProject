import React, {useContext} from 'react';
import {
    MDBBtn, MDBCol, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle, MDBRadio, MDBRow
} from "mdb-react-ui-kit";
import {Dropdown} from "react-bootstrap";
import {CARDS_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";

const CreateCard = observer(({show,onHide}) => {
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
                            <MDBModalTitle>Creating Cards</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow>
                            <MDBCol md='6' className='mb-4'>
                                <h6 className="fw-bold">Select card type: </h6>
                                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Debit' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Credit' inline />
                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6' className='mb-4'>
                                    <h6 className="fw-bold">Currency: </h6>
                                    <MDBRadio name='inlineRadio1' id='inlineRadio4' value='option3' label='USD' inline />
                                    <MDBRadio name='inlineRadio1' id='inlineRadio5' value='option4' label='EUR' inline />
                                    <MDBRadio name='inlineRadio1' id='inlineRadio6' value='option5' label='UAH' inline />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={4} minLength={4} wrapperClass='mb-4' label='PIN' size='lg' id='form4' type='password'/>
                                </MDBCol>
                            </MDBRow>


                        </MDBModalBody>
                        <MDBModalFooter>
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
});

export default CreateCard;