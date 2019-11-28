import React, { Component } from "react";
import '../scss/Timer.scss'
class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTotalTime: 0,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTotalTime: 0,
      timerStart: Date.now()
    });
    //timer interval
    this.timer = setInterval(() => {
      this.setState({
        timerTotalTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
    let startTimeInHour = this.getTime(this.state.timerStart);
    let endTimeInHour = this.getTime(this.state.timerStart + this.state.timerTotalTime)
    this.resetTimer()
    this.props.addTimeEntry(startTimeInHour, endTimeInHour)  
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTotalTime: 0
    });
  };

  getTime(timeInMiliseconds){
    let hours = new Date(timeInMiliseconds).getHours();
    let minutes = new Date(timeInMiliseconds).getMinutes();
    if(hours >= 0 && hours < 10){
        hours = "0" + hours;
    } 
    if(minutes >= 0 && minutes < 10){
        minutes = "0" + minutes;
    } 
    return hours + ":" + minutes
}

  render() {
    //conditional rendering - return buttons depends on timer state
    const { timerTotalTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTotalTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTotalTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTotalTime / 3600000)).slice(-2);
    if(this.state.timerOn === false && this.state.timerTotalTime === 0) {
      return (
        <div className="timer">
          <div className="start">
            <button onClick={this.startTimer}>Start</button>
          </div>
          <div className="time">
            {hours} : {minutes} : {seconds} 
          </div>
        </div>
      )
    } else if(this.state.timerOn === true) {
      return (
        <div className="timer">
          <div className="start">
            <button onClick={this.stopTimer}>Stop</button>
          </div>    
          <div className="time">
            {hours} : {minutes} : {seconds} 
          </div>
        </div>
      )
    } 
  }
}

export default Timer;