import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button,Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import FormContainer from '../Components/FormContainer'
import { createTodo } from '../actions/todoActions'
import { TODO_CREATE_RESET } from '../constants/todoConstants'


function CreateTodoScreen({history}) {

    const [title, setTitle] = useState('')
    const [memo, setMemo] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const todoCreate = useSelector(state => state.todoCreate)
    const { success, loading, error } = todoCreate

    const subscribeDetails = useSelector(state => state.subscribeDetails)
    const {subs} = subscribeDetails

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }else if(!subs.isPaid){
            history.push('/subscription')
        }
        if(success){
            dispatch({type:TODO_CREATE_RESET})
            history.push('/')
        }
    }, [dispatch,history, userInfo, success, subs])

    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(createTodo({ 
                'title': title,
                'memo': memo
             }))            
    }

    return (
        <div>
             <Row>
            <Col md={12} className="justify-content-md-center text-left">
                <h2>Create Task</h2>

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                   
                        type='text'
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>

                <Form.Group controlId='memo'>
                    <Form.Label>Memo</Form.Label>
                    <Form.Control
                   
                        type='textarea'
                        placeholder='Enter Memo'
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>

                <Button 
                    type='submit'
                    variant='primary'
                    className='my-2'
                > 
                    Create
                </Button>

            </Form>
            </Col>

        </Row>
            
        </div>
    )
}

export default CreateTodoScreen
