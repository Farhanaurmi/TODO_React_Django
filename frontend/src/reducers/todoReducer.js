import { 

    TODO_CREATE_REQUEST,
    TODO_CREATE_SUCCESS,
    TODO_CREATE_FAIL,
    TODO_CREATE_RESET,

    TODO_DETAILS_REQUEST,
    TODO_DETAILS_SUCCESS,
    TODO_DETAILS_FAIL,

    TODO_DELETE_REQUEST,
    TODO_DELETE_SUCCESS,
    TODO_DELETE_FAIL,

 } from '../constants/todoConstants'

 export const todoCreateReducer = (state = { }, action) => {
    switch(action.type){
        case TODO_CREATE_REQUEST:
            return {loading: true }

        case TODO_CREATE_SUCCESS:
            return {loading: false, success:true, todos: action.payload }

        case TODO_CREATE_FAIL:
            return {loading: false, error: action.payload }

        case TODO_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const todoDetailsReducer = (state = { todos: [] }, action) => {
    switch(action.type){
        case TODO_DETAILS_REQUEST:
            return {loading: true, todos: [] }

        case TODO_DETAILS_SUCCESS:
            return {loading: false, todos: action.payload }

        case TODO_DETAILS_FAIL:
            return {loading: false, error: action.payload }

        default:
            return state
    }
}

export const todoDeleteReducer = (state = { }, action) => {
    switch(action.type){
        case TODO_DELETE_REQUEST:
            return {loading: true }

        case TODO_DELETE_SUCCESS:
            return {loading: false, success:true }

        case TODO_DELETE_FAIL:
            return {loading: false, error: action.payload }

        default:
            return state
    }
}