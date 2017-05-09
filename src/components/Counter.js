import React, {Component} from 'react'

class Counter extends Component{

  unlock(value, check, level){
    if(value >= check){
      return level
    }
  }

    render(){
      const {value, increment, second_level, third_level} = this.props;

    return(
      <p>
            Score: {value}
          <button onClick={increment}>
            Click
          </button>
          <button onClick={this.unlock(value, 5, second_level)}>
            Mega Click
          </button>
          <button onClick={this.unlock(value, 20, third_level)}>
            Giga Click
          </button>
      </p>
    )
  }
}


export default Counter
