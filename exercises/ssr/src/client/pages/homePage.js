import React from 'react'

//ES6 syntax

const HomePage = () => {
    return <div onClick={()=>{console.log('hi there')}}>Hello, I am home component</div>
}
//JSX syntax

export default {
    component: HomePage
}

