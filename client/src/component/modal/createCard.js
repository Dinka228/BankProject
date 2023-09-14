import React, {useContext, useState} from 'react';
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
import {createAdminTransaction} from "../../http/transactionsAPI";
import {set} from "mobx";
import {createCard} from "../../http/cardsAPI";

const CreateCard = observer(({show,onHide}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const [num, setNum] = useState(0);
    const [cvv, setCVV] = useState(0);
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const date = new Date()
    const [cardData,setCardData] = useState({cardType:"",currency:"",pin:""})
    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function addNewCard(){
        const newCards={
            ...cardData

        }
        setNum(randomNumberInRange(1000000000000000, 9999999999999999));
        let expiryDate = `${date.getFullYear()+4}-${date.getMonth()+1}-${date.getDate()}`
        setCVV(randomNumberInRange(100,999))
        console.log(expiryDate)
        const card = async ()=>{
            const response = await createCard(user.currentUser.id,newCards.cardType,num,expiryDate,
                cvv,newCards.currency,
                newCards.pin)
            console.log(response)

        }
        card()
        setCardData({cardType:"",currency:"",pin:""})
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
                            <MDBModalTitle>Creating Cards</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow>
                            <MDBCol md='6' className='mb-4'>
                                <h6 className="fw-bold">Select card type: </h6>
                                <MDBRadio name='inlineRadio' id='inlineRadio1' value='Debit' label='Debit' inline
                                          onChange={e => setCardData({...cardData, cardType: e.target.value})}/>
                                <MDBRadio name='inlineRadio' id='inlineRadio2' value='Credit' label='Credit' inline
                                          onChange={e => setCardData({...cardData, cardType: e.target.value})}/>
                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6' className='mb-4'>
                                    <h6 className="fw-bold">Currency: </h6>
                                    <MDBRadio name='inlineRadio1' id='inlineRadio4' value='USD' label='USD' inline
                                     onChange={e => setCardData({...cardData, currency: e.target.value})}/>/>
                                    <MDBRadio name='inlineRadio1' id='inlineRadio5' value='EUR' label='EUR' inline
                                     onChange={e => setCardData({...cardData, currency: e.target.value})}/>/>
                                    <MDBRadio name='inlineRadio1' id='inlineRadio6' value='UAH' label='UAH' inline
                                     onChange={e => setCardData({...cardData, currency: e.target.value})}/>/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput maxLength={4} minLength={4} wrapperClass='mb-4' label='PIN' size='lg' id='form4' type='password'
                                              value={cardData.senderCard}
                                              onChange={e => setCardData({...cardData, pin: e.target.value})}
                                    />
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
                            <MDBBtn onClick={()=>addNewCard()}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default CreateCard;