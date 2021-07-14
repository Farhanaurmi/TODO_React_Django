import axios from 'axios'
import { 

    TODO_CREATE_REQUEST,
    TODO_CREATE_SUCCESS,
    TODO_CREATE_FAIL,

    TODO_DETAILS_REQUEST,
    TODO_DETAILS_SUCCESS,
    TODO_DETAILS_FAIL,

    TODO_DELETE_REQUEST,
    TODO_DELETE_SUCCESS,
    TODO_DELETE_FAIL,


 } from '../constants/todoConstants'
 

export const createTodo = (todo) => async (dispatch, getState) => {
    try{
        dispatch({
            type: TODO_CREATE_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `/api/todo/create`,
            todo,
            config
            )

        dispatch({
            type:TODO_CREATE_SUCCESS,
            payload:data
        })


    }catch(error){
        dispatch({
            type: TODO_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const listTodoDetails = () => async (dispatch,getState) => {
    try {
        dispatch({ type: TODO_DETAILS_REQUEST })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/todo`,
            config
            )

        dispatch({ 
            type: TODO_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: TODO_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const deleteTodo = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: TODO_DELETE_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `/api/todo/delete/${id}`,
            config
            )

        dispatch({
            type:TODO_DELETE_SUCCESS
        })


    }catch(error){
        dispatch({
            type: TODO_DELETE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}