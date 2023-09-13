import React, {useContext, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox, MDBRadio
}
    from 'mdb-react-ui-kit';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import {registration} from "../http/userAPI";

const SignUp = observer(() => {
    const [User, setUser] = useState({email:"",password:""})
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
    const [newUser, setNewUser] = useState({email:"",password: "",firstName: "",lastName: "",dateOfBirth: "",address: "",contactNumber: ''})
    const addNewUser = () =>{
        const newUsers={
            ...newUser

        }
        const reg = async ()=>{
            const response = await registration(newUsers.email,newUsers.password,newUsers.firstName,
                newUsers.lastName,newUsers.dateOfBirth,
                newUsers.address,newUsers.contactNumber)
            console.log(response)
            user.setUser(response)
            user.setIsAuth(true)
        }
        reg()
        setNewUser({email:"",password: "",firstName: "",lastName: "",dateOfBirth: "",address: "",contactNumber: ''})
        // history.push(MAIN_ROUTE)
    }
    return (
        <MDBContainer fluid>

            <MDBRow className='justify-content-center align-items-center m-5'>

                <MDBCard>
                    <MDBCardBody className='px-4'>

                        <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'
                                          value={newUser.firstName}
                                          onChange={e => setNewUser({...newUser, firstName: e.target.value})}
                                />
                            </MDBCol>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'
                                value={newUser.lastName}
                                          onChange={e => setNewUser({...newUser, lastName: e.target.value})}
                                />
                            </MDBCol>

                        </MDBRow>

                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'
                                value={newUser.dateOfBirth}
                                          onChange={e => setNewUser({...newUser, dateOfBirth: e.target.value})}
                                />
                            </MDBCol>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form3' type='text'
                                value={newUser.address}
                                          onChange={e => setNewUser({...newUser, address: e.target.value})}
                                />
                            </MDBCol>

                        </MDBRow>

                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'
                                value={newUser.email}
                                          onChange={e => setNewUser({...newUser, email: e.target.value})}
                                />
                            </MDBCol>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='text'
                                value={newUser.contactNumber}
                                          onChange={e => setNewUser({...newUser, contactNumber: e.target.value})}
                                />
                            </MDBCol>

                        </MDBRow>
                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password'
                                          value={newUser.password}
                                          onChange={e => setNewUser({...newUser, password: e.target.value})}
                                />
                            </MDBCol>

                        </MDBRow>

                        <MDBBtn className='mb-4' size='lg' onClick={()=>{
                            addNewUser()
                        }
                        }>Submit</MDBBtn>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow>
        </MDBContainer>
    );
});

export default SignUp;