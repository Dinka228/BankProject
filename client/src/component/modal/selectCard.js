import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {CARDS_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const SelectCard = observer(({show,onHide}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const [selectCard,setSelectCard] = useState('')
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
                            <MDBModalTitle>Selecting Cards</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                                <Dropdown className='mt-3'>
                                    <Dropdown.Toggle> {selectCard || "Select one of your cards"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {bank.cards.map(card=>
                                            <Dropdown.Item
                                                onClick={()=>{
                                                    bank.setSelectCard(card)
                                                    setSelectCard(card.number)
                                                }
                                                }
                                                key={card.id}
                                            >
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        {card.number}
                                                    </div>
                                                    <div>
                                                        {card.balance}
                                                    </div>
                                                </div>

                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                                history.push(CARDS_ROUTE)
                            }
                            }>
                                Select
                            </MDBBtn>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                onHide()
                                user.setCreateCard(true)
                            }
                            }>Create new card</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default SelectCard;