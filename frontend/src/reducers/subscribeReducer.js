import { 

    SUBSCRIBE_CREATE_REQUEST,
    SUBSCRIBE_CREATE_SUCCESS,
    SUBSCRIBE_CREATE_FAIL,

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