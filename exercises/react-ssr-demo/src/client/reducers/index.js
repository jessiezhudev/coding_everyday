import goodsReducer from './goodsReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    goods: goodsReducer
})