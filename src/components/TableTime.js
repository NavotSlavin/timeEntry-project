import React from 'react';
import TimeEntryDetails from './TimeEntryDetails'
class TableTime extends React.Component {
    showTimeEntries(){

    }
    render () {
        const listOfTimeEntries = this.props.listOfTimeEntries
        const listItems = listOfTimeEntries.map((timeEntry) => {
            const { task , project, startTime, endTime } = timeEntry
            return <TimeEntryDetails task={task} project={project} startTime={startTime} endTime={endTime}/>
         })
        return (
            <table>
            <thead>
                <tr>
                <th>Task</th>
                <th>Project</th>
                <th>start</th>
                <th>end</th>
                </tr>
            </thead>
            <tbody>
                { listItems }
            </tbody>
            </table>
        ) 
    }
 }




export default TableTime;