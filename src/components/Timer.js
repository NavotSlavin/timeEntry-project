import React from 'react';
class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {toatlTime: 0 };
    }
  
    componentDidMount() {
  
    }
  
    componentWillUnmount() {
  
    }
  
    render() {
      return (
        <div>
          <span> total time : {this.state.toatlTime} </span>
        </div>
      );
    }
  }

  export default Timer;