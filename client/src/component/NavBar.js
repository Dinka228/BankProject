import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {
    MDBBtn,
    MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import {Button, Container, Dropdown, Nav, Navbar, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../index";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";



const NavBar = observer(() => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    const [showNavCentred, setShowNavCentred] = useState(false);
    const history = useHistory()
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light style={{backgroundColor:"grey"}}>
            <MDBContainer fluid>
                <MDBNavbarBrand style={{cursor:"pointer"}}>BankProject</MDBNavbarBrand>
                {
                    user.isAuth ? <MDBNavbarBrand className='m-auto' style={{cursor:"pointer"}} onClick={()=>{
                            user.setIsAuth(false)
                            history.push(LOGIN_ROUTE)
                        }
                        }>Sign out</MDBNavbarBrand> :
                        <div className='d-flex flex-row'>
                            {/*{*/}
                            {/*    user.currentUser.role === 'ADMIN' ?*/}
                            {/*        <MDBNavbarBrand  style={{cursor:"pointer"}} onClick={()=>{*/}
                            {/*            user.setAdminPanel(true)*/}
                            {/*        }*/}
                            {/*        }>AdminPanel</MDBNavbarBrand>*/}
                            {/*        :<div></div>*/}
                            {/*}*/}
                            <MDBNavbarBrand  style={{cursor:"pointer"}} onClick={()=>{
                                user.setAdminPanel(true)
                            }
                            }>AdminPanel</MDBNavbarBrand>
                            <MDBNavbarBrand  style={{cursor:"pointer"}} onClick={()=>{
                                history.push(LOGIN_ROUTE)
                            }
                            }>Sign In</MDBNavbarBrand>
                            <MDBNavbarBrand  style={{cursor:"pointer"}} onClick={()=>{
                                history.push(REGISTRATION_ROUTE)
                            }
                            }>Sign Up</MDBNavbarBrand>
                        </div>

                }

            </MDBContainer>
        </MDBNavbar>
    );
})

export default NavBar;