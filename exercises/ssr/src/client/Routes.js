import React from 'react'
import HomePage from './pages/HomePage'
import UsersPage, {loadData} from './pages/UsersPage'
export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/users',
        component: UsersPage,
        loadData
    }
]