import axios from 'axios'
import { 

    SUBSCRIBE_CREATE_REQUEST,
    SUBSCRIBE_CREATE_SUCCESS,
    SUBSCRIBE_CREATE_FAIL,

    SUBSCRIBE_DETAILS_REQUEST,
    SUBSCRIBE_DETAILS_SUCCESS,
    SUBSCRIBE_DETAILS_FAIL,


 } from '../constants/subscribeConstants'

export const createSubscribe = (p) => async (dispatch, getState) => {
    try{
        dispatch({
            type: SUBSCRIBE_CREATE_REQUEST
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
            `/api/subscribe/create`,
            p,
            config
            )

        dispatch({
            type:SUBSCRIBE_CREATE_SUCCESS,
            payload:data
        })


    }catch(error){
        dispatch({
            type: SUBSCRIBE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const listSubscribeDetails = () => async (dispatch, getState) => {
    try {
        dispatch({ type: SUBSCRIBE_DETAILS_REQUEST })

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
            `/api/subscription`,
            config
            )

        dispatch({ 
            type: SUBSCRIBE_DETAILS_SUCCESS,
            payload: data
        })
        localStorage.setItem('subInfo', JSON.stringify(data))

    } catch (error){
        dispatch({
            type: SUBSCRIBE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}