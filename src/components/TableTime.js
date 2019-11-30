import React from 'react';
import TimeEntryDetails from './TimeEntryDetails'
import '../scss/TableTime.scss'
class TableTime extends React.Component {

    render () {
        const listOfTimeEntries = this.props.listOfTimeEntries;
        const listItems = listOfTimeEntries.map((timeEntry, index) => {
            const { task , project, startTime, endTime } = timeEntry
            return <TimeEntryDetails key={index} task={task} project={project} startTime={startTime} endTime={endTime}/>
         })
        return (
            <div className="rTable">
                <div className="rTableRow">
                    <div className="tableCol"><strong>Task</strong></div>
                    <div className="tableCol"><strong>project</strong></div>
                    <div className="tableCol"><strong>start</strong></div>
                    <div className="tableCol"><strong>end</strong></div>
                </div>
                { listItems }
            </div>
        ) 
    }
 }


export default TableTime;