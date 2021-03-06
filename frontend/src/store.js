import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer } from './reducers/userReducers'

import { packageDetailsReducer,
    packageIdDetailsReducer,
    packageDeleteReducer,
    packageCreateReducer,
    packageUpdateReducer } from './reducers/packageReducer'

import { subscribeCreateReducer, 
    subscribeDetailsReducer, } from './reducers/subscribeReducer'

import { todoCreateReducer,
        todoDeleteReducer,
        todoDetailsReducer } from './reducers/todoReducer'

const reducer = combineReducers ({

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

    packageDetails: packageDetailsReducer,
    packageIdDetails: packageIdDetailsReducer,
    packageDelete: packageDeleteReducer,
    packageCreate: packageCreateReducer,
    packageUpdate: packageUpdateReducer,

    subscribeCreate: subscribeCreateReducer,
    subscribeDetails: subscribeDetailsReducer,

    todoCreate: todoCreateReducer,
    todoDelete: todoDeleteReducer,
    todoDetails: todoDetailsReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk] 

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store