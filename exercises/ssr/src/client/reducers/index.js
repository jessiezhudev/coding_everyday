import usersReducer from './usersReducer'
import authReducer from './authReducer'
import adminsReducer from './adminsReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
})