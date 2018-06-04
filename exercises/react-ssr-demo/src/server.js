import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home, {loadData} from './pages/home.js'

const app = express()
app.use(express.static('public'))
app.get('/', (req, res)=>{
    let initialGoods
    loadData().then((response)=>{
        initialGoods = response.data.data.list
        const content = renderToString(<Home initialGoods={initialGoods}/>)
        const html = `
        <body>
            <div id="app">${content}</div>
            <script>window._initialGoods=${JSON.stringify(initialGoods)}</script>
            <script src="bundle.js"></script>
        </body>
        `
        res.send(html)
    })

})

app.listen(3000, ()=>{
    console.log('listening 3000')
})