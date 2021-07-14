import axios from 'axios'
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
    
    PACKAGE_ID_DETAILS_REQUEST,
    PACKAGE_ID_DETAILS_SUCCESS,
    PACKAGE_ID_DETAILS_FAIL,

 } from '../constants/packageConstants'


export const listPackageDetails = () => async (dispatch) => {
    try {
        dispatch({ type: PACKAGE_DETAILS_REQUEST })

        const{data} = await axios.get(`/api/package`)

        dispatch({ 
            type: PACKAGE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: PACKAGE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const listPackageIdDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PACKAGE_ID_DETAILS_REQUEST })

        const{data} = await axios.get(`/api/package/${id}`)

        dispatch({ 
            type: PACKAGE_ID_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: PACKAGE_ID_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}



export const deletePackage = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: PACKAGE_DELETE_REQUEST
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
            `/api/package/delete/${id}`,
            config
            )

        dispatch({
            type:PACKAGE_DELETE_SUCCESS
        })


    }catch(error){
        dispatch({
            type: PACKAGE_DELETE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const createPackage = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: PACKAGE_CREATE_REQUEST
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
            `/api/package/create`,
            {},
            config
            )

        dispatch({
            type:PACKAGE_CREATE_SUCCESS,
            payload:data
        })


    }catch(error){
        dispatch({
            type: PACKAGE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const updatePackage = (p) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PACKAGE_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/package/update/${p.id}`,
            p,
            config
        )
        dispatch({
            type: PACKAGE_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: PACKAGE_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PACKAGE_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

