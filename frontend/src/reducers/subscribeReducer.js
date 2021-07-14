import { 

    SUBSCRIBE_CREATE_REQUEST,
    SUBSCRIBE_CREATE_SUCCESS,
    SUBSCRIBE_CREATE_FAIL,
    SUBSCRIBE_CREATE_RESET,

    SUBSCRIBE_DETAILS_REQUEST,
    SUBSCRIBE_DETAILS_SUCCESS,
    SUBSCRIBE_DETAILS_FAIL,

 } from '../constants/subscribeConstants'


 export const subscribeCreateReducer = (state = { }, action) => {
    switch(action.type){
        case SUBSCRIBE_CREATE_REQUEST:
            return {loading: true }

        case SUBSCRIBE_CREATE_SUCCESS:
            return {loading: false, success:true, pkg: action.payload }

        case SUBSCRIBE_CREATE_FAIL:
            return {loading: false, error: action.payload }

        case SUBSCRIBE_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const subscribeDetailsReducer = (state = { subs: [] }, action) => {
    switch(action.type){
        case SUBSCRIBE_DETAILS_REQUEST:
            return {loading: true, subs: [] }

        case SUBSCRIBE_DETAILS_SUCCESS:
            return {loading: false, subs: action.payload }

        case SUBSCRIBE_DETAILS_FAIL:
            return {loading: false, error: action.payload }

        default:
            return state
    }
}