import React from 'react';
import Timer from './Timer'
import DropdownProjects from './DropdownProjects'
import '../scss/TimeEntryBar.scss'
class TimeEntryBar extends React.Component {
    state = { 
        task : '',
        project : '',
        startTime: '',
        endTime : ''
    }

    handleTimerChange = (startTime, endTime) => {
        //async operation
        this.setState({ startTime : startTime , endTime : endTime});
        
        //pass the parent component the data
        this.props.onSubmit(this.state.task, this.state.project, startTime, endTime)
    }
     
    render() {
        return (
            <div className="timeEntryBar" >
                <div className="taskWrapper">
                    <input className="taskInput"
                        type="text"
                        placeholder="What are you working on?"
                        value={this.state.task}
                        onChange={ e => this.setState({ task : e.target.value})}
                        />
                </div>
                <div className="selectWrapper">
                    <select className="selectDrop" value={this.state.value} onChange={e => this.setState({ project : e.target.value})}>
                                <option value="Project 1">Project 1</option>
                                <option value="Project 2">Project 2</option>
                                <option value="Project 3">Project 3</option>
                                <option value="eLoomina">eLoomina</option>
                    </select>
                </div>
                <div className="timerWrapper">
                    <Timer addTimeEntry={this.handleTimerChange}  getTime={this.getTime} />
                </div>
            </div>
        );
    }
}



export default TimeEntryBar;