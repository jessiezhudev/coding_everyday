// todo state tree
{
  todos: [
    {
      text: 'go to see Jessie',
      completed: true
    },
    {
      text: 'go to watch movies',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}

//todo actions
{"type": "ADD_TODO", "text": "go to see Jessie"}
{"type": "TOGGLE_TODO", "index": 1}
{"type": "SET_VISIBILITY_FILTER", "filter": "SHOW_ALL"}

//todo reducers to combine state and actions
function todos(state=[], action){
    switch (action.type){
      case: 'ADD_TODO':
        return state.concat([{ text: action.text, completed:false}])
      case: 'TOGGLE_TODO':
        return state.map((todo,index) =>
          action.index === index?
            {text: todo.text, completed: !todo.completed}:
            todo
        )
      )
      default:
        return false
    }
}

function visibilityFilter(state={}, action){
  if(action.type === "SET_VISIBILITY_FILTER") {
    return action.filter
  } else{
    return state
  }
}

//combine two reducers 传入旧状态和action, 返回新状态
function todoApp(state={}, action){
  return{
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

//only way to change state is to emit an action
store.dispatch({
  type: 'ADD_TODO',
  text: 'go to watch movies'
})

store.dispatch({
  type: 'TOGGLE_TODO',
  index: 1
})

store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_ALL"
})

//reducers take the previous state and an action, and return the next state. remember to return new state objects, instead of mutating the previous state!

import { combineReducers, createStore} from 'redux';
let reducer = combineReducers({visibilityFilter, todos})
let store = createStore(reducer)

// specify the initial state.
import {visibilityFilters} from "./actions"

const initialState = {
  visibilityFilters: visibilityFilters.SHOW_ALL,
  todos: []
}
//for now don't handle any actions
function todoApp(state, action){
  if (typeof state === "undefined") {
    return initialState
  }
  return state
}

//es6 in a compact way
function todoApp(state=initialState, action){
  return state
}


function todoApp(state=initialState, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
     return state
  }
}
//we don't mutate the state, we create a copy with Object.assign().
