import React from 'react';
import ReactDOM from 'react';
import {createStore} from 'redux';
import counter from './reducers';
import Counter from './components/counter';

var store = createStore(counter);
var rootEl = document.getElementBy("root");
const render = () => ReactDOM.render(
  <Counter onIncrement = {()=>store.dispatch({})}
    onDecrement = {onDecrement}
  />,
  rootEl
)

render()

store.subscribe(render)
