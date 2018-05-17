// const express = require('express')
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString
// const Home = require('./client/components/Home').default
// commonjs syntax

// transferring common js to es6 syntax by using webpack
import express from 'express'
import renderer from './helpers/renderer.js'
import createStore from './helpers/createStore.js'
const app = express()
app.use(express.static('public'))
app.get('*', (req, res)=>{
    const store = createStore()
    res.send(renderer(req, store))
})

app.listen(3000, () => {
    console.log('Listening on prot 3000');
});