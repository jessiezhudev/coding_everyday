const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/components/home.js').default
// commonjs syntax
const app = express()
app.get('/', (req, res)=>{
    const content = renderToString(<Home/>)
    res.send(content)
})

app.listen(3000, ()=>{
    console.log('listening 3000')
})