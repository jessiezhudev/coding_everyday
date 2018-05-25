// const express = require('express')
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString
// const Home = require('./client/components/Home').default
// commonjs syntax

// transferring common js to es6 syntax by using webpack
import express from 'express'
import renderer from './helpers/renderer.js'
import createStore from './helpers/createStore.js'
import 'babel-polyfill'
import {matchRoutes} from 'react-router-config'
import Routes from './client/Routes'
import proxy from 'express-http-proxy'

const app = express()
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000'
        return opts
    }
}))
app.use(express.static('public'))
app.get('*', (req, res)=>{
    const store = createStore(req)
    //server端根据用户访问的path手动调用组件中的LoadData方法
    const promises = matchRoutes(Routes, req.path)
        .map(({route})=>{
        return route.loadData? route.loadData(store) : null
        })
        .map(promise => {
            if(promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve)
                })
            }
        })
    Promise.all(promises).then(()=> {
        res.send(renderer(req, store))

    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});