import React from 'react'
import HomePage from './pages/HomePage'
import GoodsPage from './pages/GoodsPage'

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },{
        ...GoodsPage,
        path: '/goods'
    }
]