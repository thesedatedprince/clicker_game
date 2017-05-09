import React, {Component} from 'react'

class Counter extends Component{
  render(){
    const {value, increment} = this.props;
    return(
      <p>
            Score: {value}
          <button onClick={increment}>
            Click
          </button>
      </p>
    )
  }
}

export default Counter
