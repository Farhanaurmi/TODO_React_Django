import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { deletePackage } from '../actions/packageActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import Message from '../Components/Message'


function Package({ p }) {

    const dispatch = useDispatch()

    const packageDelete = useSelector(state => state.packageDelete)
    const {loading:loadingDelete, error:errorDelete, success:successDelete} = packageDelete

    const packageCreate = useSelector(state => state.packageCreate)
    const {loading:loadingCreate, error:errorCreate, success:successCreate, package:createdPackage} = packageCreate

    let history = useHistory()
    const submitHandler =()=>{
        history.push('/task')
    }

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to this package?')){
            dispatch(deletePackage(id))
        }
        
    }

    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    return (
        <div>{loadingDelete && <Loader/>}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

        {loadingCreate && <Loader/>}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        <Card className="my-3 p-3 rounded">
                <Card.Body>
                <Card.Title as="div" >
                <strong>
                {p.title}
                    </strong>
                    </Card.Title>  

                <Card.Text as="div" >
                <div className="my-3">
                {p.description}
                </div>
                </Card.Text>
                <Card.Text as="h3" >
                
                ${p.price} 
                    
                    </Card.Text>
                    <Card.Text as="div">
                        <Button
                        type='button'
                        onClick= {submitHandler}
                        className='btn btn-sm'
                        variant='danger'
                        className='my-2'
                        >
                            Subscribe
                        </Button>
                        {userInfo.isAdmin && (
                            <Card.Text>
                        <LinkContainer to={`/package/${p.id}/edit`}>
                            <Button variant='dark' className='btn-sm' className='my-1'>
                                <i className='fas fa-edit'></i>
                            </Button>
                        </LinkContainer>
                        

                            <Button variant='danger' className='btn-sm' className='my-1' onClick={() => deleteHandler(p.id)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                            </Card.Text>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card> 
            </div>
    )
}

export default Package
