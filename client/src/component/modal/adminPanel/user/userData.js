import React, {useContext, useState} from 'react';
import {
    MDBBtn, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle, MDBRow
} from "mdb-react-ui-kit";
import {Context} from "../../../../index";
import {useHistory} from "react-router-dom";
import UserList from "./userList";
import Scrollbar from "react-scrollbars-custom";
import {REGISTRATION_ROUTE} from "../../../../utils/consts";

const UserData = ({show,onHide}) => {
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
                            <MDBModalTitle>User Data</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput className='mt-1'
                                      placeholder="Search"
                                      onChange={e=>{
                                          setSearchCheck(e.target.value)
                                      }}>

                            </MDBInput>
                            <Scrollbar style={{ height: 250 }} noScrollX={true}>
                            <MDBRow>
                                    {
                                        user.user.filter(users=>{
                                            if(searchCheck === ""){
                                                return users
                                            }
                                            else{
                                                if(users.firstName.startsWith(searchCheck) || users.lastName.startsWith(searchCheck)){
                                                    return users
                                                }
                                            }
                                        }).map(users=>
                                            <UserList className="mb-lg-2" key={users.id} users={users}/>
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
                            <MDBBtn onClick={()=>{
                                onHide()
                                history.push(REGISTRATION_ROUTE)
                            }
                            }>Create new user</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default UserData;