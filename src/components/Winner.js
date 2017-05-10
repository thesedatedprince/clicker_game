import React, {Component} from 'react';

class Winner extends Component{

  isWinner(health){
    if(health > 0){
      return "Battle in Progress!"
    } else {
      return "You Win!"
    }
  }
  render(){

    const {health} = this.props;

    return(
      <p className="battleStatus">{this.isWinner(health)}</p>
    )
  }
}

export default Winner
