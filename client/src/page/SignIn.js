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
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import {getAccountByEmail, signIn} from "../http/userAPI";

const SignIn = observer(() => {
    const [User, setUser] = useState({email:"",password:""})
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    const sign = (e) =>{
        const Users={
            ...User

        }
        const log = async ()=>{
            const response = await signIn(Users.email,Users.password).then(data=>console.log())
            getAccountByEmail(response.sub).then(data=>user.setCurrentUser(data))
            user.setIsAuth(true)
            history.push(MAIN_ROUTE)
        }
        log()
    }
    return (
        <MDBContainer fluid>

            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-4 order-lg-3 d-flex flex-column align-items-center'>

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg'/>
                                <MDBInput label='Your Email' id='form2' type='email'
                                          value={User.email}
                                          onChange={e => setUser({...User, email: e.target.value})}
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg'/>
                                <MDBInput label='Password' id='form3' type='password'
                                          value={User.password}
                                          onChange={e => setUser({...User, password: e.target.value})}/>
                            </div>

                            <MDBBtn className='mb-4' color={"dark"} size={"lg"} onClick={()=>{
                                sign()
                                history.push(MAIN_ROUTE)
                            }
                            }>Sign in</MDBBtn>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
});

export default SignIn;