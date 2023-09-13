import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import UserList from "../user/userList";
import {Context} from "../../../../index";
import {useHistory} from "react-router-dom";
import CardsList from "./cardsList";
import Scrollbar from "react-scrollbars-custom";

const CardsData = ({show,onHide}) => {
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
                            <MDBModalTitle>{user.currentUser.lastName ? `${user.currentUser.lastName} Cards` : 'Cards Data'}</MDBModalTitle>
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
                                {
                                    bank.cards.filter(card=>{
                                        if(user.currentUser.lastName){
                                            if(+card.userId === +user.currentUser.id){
                                                return card
                                            }
                                        }
                                        else{
                                            return card
                                        }
                                    }).map(card=>
                                        <CardsList className="mb-lg-2" key={card.id} cards={card}/>
                                    )

                                }
                            </MDBRow>
                            </Scrollbar>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                user.setCurrentUser({})
                                onHide()
                                user.setAdminPanel(true)
                            }}>
                                Return to Menu
                            </MDBBtn>
                            <MDBBtn color="secondary" onClick={()=>{
                                user.setCurrentUser({})
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

export default CardsData;