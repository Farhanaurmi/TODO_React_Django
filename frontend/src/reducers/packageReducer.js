import { 

    PACKAGE_DETAILS_REQUEST,
    PACKAGE_DETAILS_SUCCESS,
    PACKAGE_DETAILS_FAIL,

    PACKAGE_DELETE_REQUEST,
    PACKAGE_DELETE_SUCCESS,
    PACKAGE_DELETE_FAIL,

    PACKAGE_CREATE_REQUEST,
    PACKAGE_CREATE_SUCCESS,
    PACKAGE_CREATE_FAIL,
    PACKAGE_CREATE_RESET,

    PACKAGE_UPDATE_REQUEST,
    PACKAGE_UPDATE_SUCCESS,
    PACKAGE_UPDATE_FAIL,
    PACKAGE_UPDATE_RESET,

 } from '../constants/packageConstants'


export const packageDetailsReducer = (state = { packages: [] }, action) => {
    switch(action.type){
        case PACKAGE_DETAILS_REQUEST:
            return {loading: true, packages: [] }

        case PACKAGE_DETAILS_SUCCESS:
            return {loading: false, packages: action.payload }

        case PACKAGE_DETAILS_FAIL:
            return {loading: false, error: action.payload }

        default:
            return state
    }
}


export const packageDeleteReducer = (state = { }, action) => {
    switch(action.type){
        case PACKAGE_DELETE_REQUEST:
            return {loading: true }

        case PACKAGE_DELETE_SUCCESS:
            return {loading: false, success:true }

        case PACKAGE_DELETE_FAIL:
            return {loading: false, error: action.payload }

        default:
            return state
    }
}


export const packageCreateReducer = (state = { }, action) => {
    switch(action.type){
        case PACKAGE_CREATE_REQUEST:
            return {loading: true }

        case PACKAGE_CREATE_SUCCESS:
            return {loading: false, success:true, package: action.payload }

        case PACKAGE_CREATE_FAIL:
            return {loading: false, error: action.payload }

        case PACKAGE_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const packageUpdateReducer = (state = { package: {} }, action) => {
    switch (action.type) {
        case PACKAGE_UPDATE_REQUEST:
            return { loading: true }

        case PACKAGE_UPDATE_SUCCESS:
            return { loading: false, success: true, package: action.payload }

        case PACKAGE_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case PACKAGE_UPDATE_RESET:
            return { package: {} }

        default:
            return state
    }
}
