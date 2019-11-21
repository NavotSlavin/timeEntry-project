import React from 'react';
import Timer from './Timer'
import '../scss/TimeEntryBar.scss'

class TimeEntryBar extends React.Component {
    state = { task : '', project : '', startTime: `${new Date().getHours()}:${new Date().getMinutes()}`, endTime : ''}
    
    //way to pass the this between parent to child
    onFormSubmit = (event) => {
        //to avoid the browser from trying to submit the form automaticly
        event.preventDefault();
        //pass the parent component the data
        this.props.onSubmit(this.state.task, this.state.project, this.state.startTime, this.state.endTime)
    }
     
    render() {
        return (
        <div className="time-entry-bar">
            <div>
                <form  onSubmit={ this.onFormSubmit } >
                    <input //controlled element
                        type="text"
                        placeholder="task"
                        value={this.state.task}
                        onChange={ e => this.setState({ task : e.target.value})}
                      />
                    <input //controlled element
                        type="text"
                        placeholder="project"
                        value={this.state.project}
                        onChange={ e => this.setState({ project : e.target.value})}
                      />
                       <input //controlled element
                        type="text"
                        placeholder="start time"
                        value={this.state.startTime}
                        onChange={ e => this.setState({ startTime : e.target.value})}
                      />
                      <input //controlled element
                        type="text"
                        placeholder="end time"
                        value={this.state.endTime}
                        onChange={ e => this.setState({ endTime : e.target.value})}
                      />
                    <button type="submit">Add</button>
                </form>
                <Timer />
            </div>
        </div>
        );
    }
}



export default TimeEntryBar;