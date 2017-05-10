import React, {Component} from 'react';

import LoadingBar from 'react-loadingbar';

class HealthBar extends React.Component {
  render(){
    const {health} = this.props;
    return(
      <LoadingBar
        progress={health} />
    )
  }
}

export default HealthBar
