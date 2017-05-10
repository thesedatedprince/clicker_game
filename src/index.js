import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers/counter'
import HealthBar from './components/HealthBar'
import Winner from './components/Winner'
import '../public/css/HealthBar.css'

const store = createStore(counter)


const render = () => ReactDOM.render(
  <div>
  <HealthBar
    totalHealth={store.getState()}/>
  <Counter
    value={store.getState()}
    increment={() => store.dispatch({type: 'INCREMENT'})}
    second_level={() => store.dispatch({type: 'SECOND_LEVEL'})}
    third_level={() => store.dispatch({type: 'THIRD_LEVEL'})}/>
  <Winner
    health={store.getState()}/>
  </div>,
  document.getElementById('root')
);

render()
store.subscribe(render)
