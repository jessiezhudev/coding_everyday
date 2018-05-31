import {createStore, applyMiddleWare} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
export default () => {
    const store = createStore(reducers, {}, applyMiddleWare(thunk))
    return store
}