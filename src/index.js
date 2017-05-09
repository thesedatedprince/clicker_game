import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    increment={() => store.dispatch({type: 'INCREMENT'})}/>,
  document.getElementById('root')
);

render()
store.subscribe(render)
