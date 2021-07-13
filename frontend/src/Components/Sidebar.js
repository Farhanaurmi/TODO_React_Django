import React from 'react'
import { Nav } from 'react-bootstrap'

function Sidebar() {
    return (
        <div>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/task">Task</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="link-2">Subscription</Nav.Link>
            </Nav.Item>
           
            <Nav.Item>
                <Nav.Link href="link-3">Logout</Nav.Link>
            </Nav.Item>
            </Nav>
            
        </div>
    )
}

export default Sidebar
