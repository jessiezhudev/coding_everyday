import {FETCH_GOODS} from '../actions'
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_GOODS:
            return action.payload.data.list
        default: 
            return state
    }
}