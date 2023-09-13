import React, {useContext, useState} from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import {Context} from "../index";
import Scrollbar from "react-scrollbars-custom";
import SelectCard from "../component/modal/selectCard";
import AdminPanel from "../component/modal/adminPanel/adminPanel";
import CreateCard from "../component/modal/createCard";
import ServicesTransfer from "../component/modal/servicesTransfer";
import UserData from "../component/modal/adminPanel/user/userData";
import CreateUser from "../component/modal/adminPanel/user/createUser";
import CardsData from "../component/modal/adminPanel/cards/cardsData";
import CreateTransactions from "../component/modal/adminPanel/transactions/createTransactions";
import TransactionsData from "../component/modal/adminPanel/transactions/transactionsData";
import CurrentUsersCards from "../component/modal/adminPanel/cards/currentUsersCards";
import CurrentCardTransactions from "../component/modal/adminPanel/transactions/currentCardTransactions";
import {observer} from "mobx-react-lite";

const Main = observer(() => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const [selectCardVisible,setSelectCardVisible] = useState(false)
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <a href='#'>Profile</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem onClick={()=>{
                                setSelectCardVisible(true)
                            }
                            }>
                                <a href="#">Cards</a>
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4" style={{height:310}}>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p>FullName</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn className='mt-4'>Update Profile Data</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>First Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Johnatan</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Last Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Smith</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">example@example.com</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <SelectCard show={selectCardVisible} onHide={()=>{setSelectCardVisible(false)}} />
            <AdminPanel show={user.adminPanel} onHide={()=>{user.setAdminPanel(false)}} />
            <CreateCard show={user.createCard} onHide={()=>{user.setCreateCard(false)}} />
            <ServicesTransfer show={user.services} onHide={()=>{user.setServices(false)}} />
            <UserData show={user.userList} onHide={()=>{user.setUserList(false)}} />
            <CreateUser show={user.createUser} onHide={()=>{user.setCreateUser(false)}} />
            <CardsData show={user.cardsList} onHide={()=>{user.setCardsList(false)}} />
            <CreateTransactions show={user.createTransactions} onHide={()=>{user.setCreateTransactions(false)}} />
            <TransactionsData show={user.transactionsList} onHide={()=>{user.setTransactionsList(false)}} />
            <CurrentUsersCards show={user.transactionsList} onHide={()=>{user.setTransactionsList(false)}} />
            <CurrentCardTransactions show={user.transactionsList} onHide={()=>{user.setTransactionsList(false)}} />
        </section>
    );
});

export default Main;