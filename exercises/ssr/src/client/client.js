import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducers'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '/api'
})

const store = createStore(reducers, window._initialState, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
import 'babel-polyfill'
import {renderRoutes} from 'react-router-config'

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter> 
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById(
    'root'
))