import React, {Component} from 'react'

class Counter extends Component{

  unlock(value, check, level){
    if(value <= check){
      return level
    }
  }

  tooLow(level, check){
    return level > check
  }

    render(){
      const {value, increment, second_level, third_level} = this.props;

    return(
      <p>
            Score: {value}
          <button onClick={increment}>
            Punch
          </button>
          <button onClick={this.unlock(value, 80, second_level)}>
            Mega Punch
            {this.tooLow(value, 80) ? <div className="label">Level too Low!</div> : null}
          </button>
          <button onClick={this.unlock(value, 50, third_level)}>
            Giga Punch
            {this.tooLow(value, 50) ? <div className="label">Level too Low!</div> : null}
          </button>
      </p>
    )
  }
}


export default Counter
