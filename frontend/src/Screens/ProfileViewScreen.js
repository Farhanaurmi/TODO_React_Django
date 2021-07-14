import React, { useState, useEffect } from 'react'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import { LinkContainer } from 'react-router-bootstrap'

function ProfileViewScreen({history}) {

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }else{
            dispatch(getUserDetails('profile'))
        }
    }, [dispatch ,history, userInfo])

    const updateHandler =()=>{
        history.push('/user/update')
    }


    return (
        <div><Row>
                <Col md={6} className="justify-content-md-center text-center">
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

                <Col md={6}>
                </Col>
            </Row>
            
        </div>
    )
}

export default ProfileViewScreen

