import React from 'react'
import ReactDom from 'react-dom'
import Home from './pages/Home'
ReactDom.hydrate(<Home initialGoods={window._initialGoods}/>, document.getElementById('app'))
