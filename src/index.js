import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers/counter'

const store = createStore(counter)


const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    increment={() => store.dispatch({type: 'INCREMENT'})}
    second_level={() => store.dispatch({type: 'SECOND_LEVEL'})}
    third_level={() => store.dispatch({type: 'THIRD_LEVEL'})}/>,
  document.getElementById('root')
);

render()
store.subscribe(render)
