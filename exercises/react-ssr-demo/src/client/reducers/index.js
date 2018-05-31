import goodsReducer from './goodsReducer'
import {combineReducer} from 'redux'

export default combineReducer({
    goods: goodsReducer
})