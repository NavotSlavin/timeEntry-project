import React from 'react';
import '../scss/TimeEntryBar.scss'

class TimeEntryBar extends React.Component {
    state = { task : '', project : ''}
    
    //way to pass the this between parent to child
    onFormSubmit = (event) => {
        //to avoid the browser from trying to submit the form automaticly
        event.preventDefault();
        //send query to server
        console.log("time-entry task : " + this.state.task)
        console.log("time-entry project : " + this.state.project)
        this.props.onSubmit(this.state.task, this.state.project)
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
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
        );
    }
}



export default TimeEntryBar;