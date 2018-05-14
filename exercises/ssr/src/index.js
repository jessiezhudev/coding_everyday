// const express = require('express')
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString
// const Home = require('./client/components/Home').default
// commonjs syntax

// transferring common js to es6 syntax by using webpack
import express from 'express'
import React from 'React'
import {renderToString} from 'react-dom/server'
import Home from './client/components/Home'
const app = express()
app.use(express.static('public'))
app.get('*', (req, res)=>{
    const content = renderToString(<Home/>)
    const html = `
        <html>
            <body>
                <div>${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
    res.send(html)
})

app.listen(3000, () => {
    console.log('Listening on prot 3000');
});