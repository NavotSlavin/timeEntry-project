import React, { Component } from "react";

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    //conditional rendering - return buttons depends on timer state
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    if(this.state.timerOn === false && this.state.timerTime === 0) {
      return (
        <div>
          <div >
            {hours} : {minutes} : {seconds} 
          </div>
          <button onClick={this.startTimer}>Start</button>
        </div>
      )
    } else if(this.state.timerOn === true) {
      return (
        <div>
          <div >
            {hours} : {minutes} : {seconds} 
          </div>
          <button onClick={this.stopTimer}>Stop</button>
        </div>
      )
    } else if(this.state.timerOn === false && this.state.timerTime > 0) {
      return (
        <div>
          <div >
            {hours} : {minutes} : {seconds} 
          </div>
          <button onClick={this.startTimer}>Resume</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      )
    }
  }
}

export default Timer;