import usersReducer from './usersReducer'
import authReducer from './authReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    users: usersReducer,
    auth: authReducer
})