import React from 'react';
import '../scss/TimeEntryBar.scss'

class TimeEntryBar extends React.Component {

    render() {
        return (
        <div className="time-entry-bar">
            <div>
                <form  onSubmit={this.props.addItem}>
                    <input 
                        type="text"
                        name="task"
                        placeholder="task"
                        onChange={this.props.handleInput}
                      />
                    <input 
                        type="text"
                        name="project"
                        placeholder="project"
                        onChange={this.props.handleInput}
                      />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
        );
    }
}



export default TimeEntryBar;