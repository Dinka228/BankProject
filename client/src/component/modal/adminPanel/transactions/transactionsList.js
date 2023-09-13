import React, {useContext} from 'react';
import cardPage from "../cards/cardPage.jpg";
import {MDBBadge, MDBBtn, MDBInputGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {Card} from "react-bootstrap";
import {Context} from "../../../../index";
import {useHistory} from "react-router-dom";

const TransactionsList = ({transactions}) => {
    const {user} = useContext(Context)
    const {bank} = useContext(Context)
    const history = useHistory()
    return (
        <Card style={{width:600,height:150,display:"flex",flexDirection:"column"}} className="mt-4" border={"black"}>
            <div className='d-flex'>
                <div className="m-lg-auto d-flex flex-row justify-content-between">
                            <div className='d-flex justify-content-between'>
                                <div className='fw-bold'>
                                    {transactions.type}
                                </div>
                                <div>
                                    {transactions.amount}$
                                </div>
                            </div>
                    <div className='d-flex'>
                        <MDBBadge pill light>
                            {transactions.startTime}
                        </MDBBadge>
                    </div>

                </div>
                {/*<div className="m-lg-auto d-flex flex-column">*/}
                {/*    {*/}
                {/*        inputVis ?*/}
                {/*            <div>*/}
                {/*                <MDBInputGroup style={{width:160    }}>*/}
                {/*                    <input className='form-control' placeholder="Balance" type='text' />*/}
                {/*                    <MDBBtn outline onClick={()=>{*/}
                {/*                        setInputVis(false)*/}
                {/*                    }*/}
                {/*                    }>Save</MDBBtn>*/}
                {/*                </MDBInputGroup>*/}
                {/*            </div>*/}
                {/*            :*/}
                {/*            <div style={{cursor:"pointer"}} onClick={()=>{setInputVis(true)}}>*/}
                {/*                {*/}
                {/*                    cards.balance + '$'*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*    }*/}


                {/*</div>*/}
            </div>

            <div className='d-flex mt-3'>
                <div className="m-lg-auto">
                    {!transactions.blocked ?
                        <MDBBtn color={"danger"}>Block</MDBBtn>
                        :
                        <MDBBtn color={"success"}>UnBlock</MDBBtn>
                    }
                </div>
            </div>




        </Card>
    );
};

export default TransactionsList;