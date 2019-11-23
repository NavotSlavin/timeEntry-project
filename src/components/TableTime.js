import React from 'react';
import TimeEntryDetails from './TimeEntryDetails'
import '../scss/TableTime.scss'
class TableTime extends React.Component {

    render () {
        const listOfTimeEntries = this.props.listOfTimeEntries;
        const listItems = listOfTimeEntries.map((timeEntry) => {
            const { task , project, startTime, endTime } = timeEntry
            return <TimeEntryDetails task={task} project={project} startTime={startTime} endTime={endTime}/>
         })
        return (
            <div className="rTable">
                <div className="rTableRow">
                    <div className="rTableHead"><strong>Task</strong></div>
                    <div className="rTableHead"><strong>project</strong></div>
                    <div className="rTableHead"><strong>start</strong></div>
                    <div className="rTableHead"><strong>end</strong></div>
                </div>
                { listItems }
            </div>
        ) 
    }
 }


export default TableTime;