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
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {registration, updateAccount} from "../../http/userAPI";

const UpdateDataUser = ({show,onHide}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const [updateUser, setUpdateUser] = useState({email:`${user.currentUser.email}`,password:``,
        firstName: `${user.currentUser.firstName}`, lastName: `${user.currentUser.lastName}`,
        dateOfBirth: `${user.currentUser.dateOfBirth}`,address: `${user.currentUser.address}`,
        contactNumber: `${user.currentUser.contactNumber}`})
    function updateDataUser(){
        const newUpdateUsers={
            ...updateUser

        }
        const update = async ()=>{
            const response = await updateAccount(user.currentUser.id,newUpdateUsers.email,newUpdateUsers.password,newUpdateUsers.firstName,
                newUpdateUsers.lastName,newUpdateUsers.dateOfBirth,
                newUpdateUsers.address,newUpdateUsers.contactNumber)
            console.log(response)
            if(user.isAuth){


            }else{
                user.setCurrentUser(response)
                user.setIsAuth(true)
            }

        }
        update()
        setUpdateUser({email:`${user.currentUser.email}`,password:'',
            firstName: `${user.currentUser.firstName}`, lastName: `${user.currentUser.lastName}`,
            dateOfBirth: `${user.currentUser.dateOfBirth}`,address: `${user.currentUser.address}`,
            contactNumber: `${user.currentUser.contactNumber}`})
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
                            <MDBModalTitle>Update Data User</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow>

                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='First Name' placeholder={user.currentUser.firstName} size='lg' id='form1' type='text'
                                              value={updateUser.firstName}
                                              onChange={e => setUpdateUser({...updateUser, firstName: e.target.value})}
                                    />
                                </MDBCol>

                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Last Name' placeholder={user.currentUser.lastName} size='lg' id='form2' type='text'
                                              value={updateUser.lastName}
                                              onChange={e => setUpdateUser({...updateUser, lastName: e.target.value})}
                                    />
                                </MDBCol>

                            </MDBRow>

                            <MDBRow>

                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Birthday' placeholder={user.currentUser.dateOfBirth} size='lg' id='form3' type='text'
                                              value={updateUser.dateOfBirth}
                                              onChange={e => setUpdateUser({...updateUser, dateOfBirth: e.target.value})}
                                    />
                                </MDBCol>

                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Address' placeholder={user.currentUser.address} size='lg' id='form3' type='text'
                                              value={updateUser.address}
                                              onChange={e => setUpdateUser({...updateUser, address: e.target.value})}
                                    />
                                </MDBCol>

                            </MDBRow>

                            <MDBRow>

                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Email' placeholder={user.currentUser.email} size='lg' id='form4' type='email'
                                              value={updateUser.email}
                                              onChange={e => setUpdateUser({...updateUser, email: e.target.value})}
                                    />
                                </MDBCol>

                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Phone Number' placeholder={user.currentUser.contactNumber} size='lg' id='form5' type='text'
                                              value={updateUser.contactNumber}
                                              onChange={e => setUpdateUser({...updateUser, contactNumber: e.target.value})}
                                    />
                                </MDBCol>

                            </MDBRow>
                            <MDBRow>

                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password'
                                              value={updateUser.password}
                                              onChange={e => setUpdateUser({...updateUser, password: e.target.value})}
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
                            <MDBBtn onClick={()=>updateDataUser()}>Update</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default UpdateDataUser;