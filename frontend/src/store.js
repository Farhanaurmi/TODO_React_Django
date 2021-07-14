import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer } from './reducers/userReducers'

import { packageDetailsReducer,
    packageDeleteReducer,
    packageCreateReducer,
    packageUpdateReducer } from './reducers/packageReducer'

const reducer = combineReducers ({

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

    packageDetails: packageDetailsReducer,
    packageDelete: packageDeleteReducer,
    packageCreate: packageCreateReducer,
    packageUpdate: packageUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk] 

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store