import React, { useState, useEffect } from 'react'
import { Row, Col, ListGroup, Button, Table } from 'react-bootstrap'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import { listSubscribeDetails } from '../actions/subscribeActions'
import { LinkContainer } from 'react-router-bootstrap'

function ProfileViewScreen({history}) {

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const subscribeDetails = useSelector(state => state.subscribeDetails)
    const {subs} = subscribeDetails

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }else{
            dispatch(getUserDetails('profile'))
            dispatch(listSubscribeDetails())
        }
    }, [dispatch ,history, userInfo])

    const updateHandler =()=>{
        history.push('/user/update')
    }


    return (
        <div><Row>
                <Col md={5} >
                    <h2>User Profile</h2>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <ListGroup>
                    <ListGroup.Item>
                        <p><strong>Email: </strong>{user.email}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button 
                        type='button'
                        className='btn btn-block'
                        onClick={updateHandler}
                        >
                            Update profile
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
                </Col>

                <Col md={7} className="justify-content-md-center text-center">
                    <h2>Packages</h2>
                    <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PAID</th>
                            <th>PACKAGE TITLE</th>
                            <th>PACKAGE PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        { subs.map(sub =>(
                            <tr key={sub.id}>
                                <td>{sub.id}</td>
                                <td>{sub.isPaid ? 
                                ( sub.paidAt.substring(1,10) ) 
                                :(<i className='fas fa-times' style={{ color: 'red' }}></i>)
                                }</td>
                                <td>{sub.packages.title}</td>
                                <td>{sub.packages.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>

                </Col>
            </Row>
            
        </div>
    )
}

export default ProfileViewScreen

