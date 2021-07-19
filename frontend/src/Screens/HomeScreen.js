import React,{useEffect} from 'react'
import { useSelector,useDispatch, } from 'react-redux'
import { Row, Col, ListGroup, Button, Table } from 'react-bootstrap'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { listTodoDetails,deleteTodo } from '../actions/todoActions'

function HomeScreen({history}) {

    const dispatch = useDispatch()

    const todoDetails= useSelector(state => state.todoDetails)
    const {error,loading,todos} = todoDetails

    const todoDelete= useSelector(state => state.todoDelete)
    const {error:errorD, loading:loadingD, success} = todoDelete

    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }else{
            dispatch(listTodoDetails())
            
        }
    }, [history, userInfo, success])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to complete this task?')){
            dispatch(deleteTodo(id))
        }
    }

    return (
        <div>
            <h2>All Task</h2>
            {!todos? <Loader/>
            : (
                    <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>MEMO</th>
                            <th>DATE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { todos.map(todo =>(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.memo}</td>
                                <td>{todo.createtime.substring(1,10)}</td>
                                <td><Button
                                type='button'
                                onClick={()=>deleteHandler(todo.id)}
                                variant='success'
                                >
                                <i className="fas fa-calendar-check"></i>
                                    </Button></td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>          
            )
            }
        </div>
    )
}

export default HomeScreen
