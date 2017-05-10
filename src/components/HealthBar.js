import React from 'react';

class HealthBar extends React.Component {
  render(){

    const {totalHealth} = this.props;

    var backBar = {
      width: Math.abs(totalHealth - 100) + "%",
      height: 20 + 'px'
    };

    var leftBar = {
      width: totalHealth + "%",
      height: 20 + 'px'
    }

    return(
      <div>
        <div className="setBar">
          <div className="barSection healthTotal" style={backBar}></div>
          <div id='heatlhLeft' className="barSection healthLeft" style={leftBar}></div>
        </div>
      </div>
    )
  }
}

export default HealthBar
