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
        const { task, project } = this.state
        //async operation
        this.setState({ task : '', project: '',startTime : '' , endTime : ''});
        //pass the parent component the data
        this.props.onSubmit(task, project, startTime, endTime);    
    }

    setProjectState = (project) => {
        this.setState({  project: project});
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
                    <DropdownProjects setProject={this.setProjectState}/>
                </div>
                <div className="timerWrapper">
                    <Timer addTimeEntry={this.handleTimerChange}  getTime={this.getTime} />
                </div>
            </div>
        );
    }
}



export default TimeEntryBar;