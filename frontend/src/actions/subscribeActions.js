import axios from 'axios'
import { 

    SUBSCRIBE_CREATE_REQUEST,
    SUBSCRIBE_CREATE_SUCCESS,
    SUBSCRIBE_CREATE_FAIL,

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