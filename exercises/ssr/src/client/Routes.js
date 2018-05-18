import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
export default () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={Users}/>
        </div>
    )
}