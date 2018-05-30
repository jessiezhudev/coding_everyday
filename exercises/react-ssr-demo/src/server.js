import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from './pages/home.js'

const app = express()
app.use(express.static('public'))
app.get('/', (req, res)=>{
    const content = renderToString(<Home/>)
    const html = `
    <body>
        <div id="app">${content}</div>
    </body>
    `
    res.send(html)
})

app.listen(3000, ()=>{
    console.log('listening 3000')
})