import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {renderRoutes} from 'react-router-config'

const store = createStore(reducers, window._initialState, applyMiddleware(thunk))
import 'babel-polyfill'

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
, document.getElementById('app'))