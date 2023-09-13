import React, {useContext} from 'react';
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
import client from './client.jpg'
import {Button, Card, Dropdown} from "react-bootstrap";
import {CARDS_ROUTE} from "../../../../utils/consts";
import {Context} from "../../../../index";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";

const UserList = observer(({users}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    return (
        <Card style={{width:600,height:150,display:"flex",flexDirection:"row"}} className="mt-4" border={"black"}>
            <div className='m-lg-auto'>
                <img src={client} style={{width:70,height:70}} alt=""/>
            </div>
            <div className="m-lg-auto d-flex flex-column">
                <div>
                    {
                        users.firstName +' '+ users.lastName
                    }
                </div>
            </div>

            <div className="m-lg-auto">
                <MDBBtn style={{width:110}} color={"info"} onClick={()=>{
                    user.setCurrentUser(users)
                    user.setUserList(false)
                    user.setCardsList(true)
                }
                }>Cards User</MDBBtn>
            </div>
            <div className="m-lg-auto" >
                {!users.blocked ?
                    <MDBBtn style={{width:110}} className=' m-2' color={"danger"}>Block</MDBBtn>
                    :
                    <MDBBtn style={{width:110}} className=' m-2' color={"success"}>UnBlock</MDBBtn>
                }
                <MDBBtn style={{width:110}} className='mt-2 m-2' color={"danger"}>Delete</MDBBtn>
            </div>



        </Card>
    );
});

export default UserList;