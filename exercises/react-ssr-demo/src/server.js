import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {renderRoutes, matchRoutes} from 'react-router-config'
import {StaticRouter} from 'react-router-dom'
import Routes from './client/Routes'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './client/reducers'
import 'babel-polyfill'

const app = express()
app.use(express.static('public'))
app.get('*', (req, res)=>{
    const store = createStore(reducers, {}, applyMiddleware(thunk))
    const promises = matchRoutes(Routes, req.path) //matchRoutes returns an array with structure as [{route: '...'}]
        .map(({route})=>{ //es6 destructuring
            return route.loadData? route.loadData(store) : null
        })
        .map(promise => {
            if(promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve)
                })
            }
        }) // ???
    Promise.all(promises).then(()=> {
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider>
        )
        const html = `
        <body>
        <div id="app">${content}</div>
        <script>
        window._initialState = ${JSON.stringify(store.getState())}
        </script>
        <script src="bundle.js"></script>
 
        </body>
        `
        res.send(html)
    })
})

app.listen(3000, ()=>{
    console.log('listening 3000')
})