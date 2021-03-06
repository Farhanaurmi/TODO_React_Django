import React from 'react'
import { Nav,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import logoimg from './image/logo.png'
import { logout } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

function Sidebar() {

    let history = useHistory()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()
    const logoutHandler = () =>{
      dispatch(logout())
      history.push('/login')
    }

    return (
        <div>
            {userInfo && (

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky"></div>             
            <Nav.Item className='mx-2'>
                <img src={logoimg} width='30%'/>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link href="/task">Task</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link href="/subscription">Subscription</Nav.Link>
            </Nav.Item>
           
            <Nav.Item>
                <Button type='button' className='btn btn-block my-2 mx-3' onClick={logoutHandler}>Logout</Button>
            </Nav.Item>
            </Nav>
            )}
            
            
        </div>
    )
}

export default Sidebar
