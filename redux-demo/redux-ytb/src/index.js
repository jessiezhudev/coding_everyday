import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise-middleware';
const initialstate = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};
const reducer = (state=initialstate, action) => {
  // switch (action.type) {
  //   case "INC":
  //     return state+1;
  //   case "DEC":
  //     return state-1;
  //   case "E":
  //     throw new Error("AAAAA!")
  //   default:
  //     return state;
  // }
  //
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return state = {...state, fetching:true}
    case "FETCH_USERS_FULFILLED":
      return state = {...state, fetching:false, fetched: true, users: action.payload.data}
    case "FETCH_USERS_REJECTED":
      return state = {...state, fetching:false, fetched: false, error: action.payload}
    default:
      return state;
  }
}
// const logger = (store) => (next) => (action) => {
//   console.log("action fired", action);
//
//   next(action);
// }
//
// const error = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch(e){
//     console.log("ahhh error", e);
//   }
// }

//redux middleware act like express js, intersect every single action that come through, can either modify that action, or cancel that action
// pay attention to promise() function write way with ()
const middleware = applyMiddleware(ReduxPromise(), createLogger());
// const userReducer = (state={}, action)=>{
//   switch (action.type) {
//     case "changeName":
//       return state = {...state, name:action.name}
//     case "changeAge":
//       return state = {...state, age:action.age}
//     default:
//       return state
//   }
// };
// const tweetReducer = (state=[], action)=>{
//   return state;
// };
// const reducer = combineReducers({
//   user: userReducer,
//   tweets: tweetReducer
// });

// the second argument of combinestore can be the initialstate.
const store = createStore(reducer, middleware);

// {...state, key:value} destruct the state and overwrite the prop. a new object

const render = () => ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);

render();

//listen to the store. when anything changes on the store.
store.subscribe(()=>console.log("store changed", store.getState()));
// store.dispatch({type:"changeName", name:"Jessie"});
// store.dispatch({type:"changeAge", age:25});
// store.dispatch({type:"INC"});
// store.dispatch({type:"INC"});
// store.dispatch({type:"DEC"});
// store.dispatch({type:"DEC"});
// store.dispatch({type:"E"});

//no more dispatch object, dispatch function
// store.dispatch((dispatch)=>{
//   dispatch({type: "FETCH_USERS_START"});
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//   .then((response) => {
//     dispatch({type: "RECEIVE_USERS", payload: response.data})
//   })
//   .catch((err) => {
//     dispatch({type: "FETCH_USERS_ERROR", payload: err})
//   })
// })
store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})
