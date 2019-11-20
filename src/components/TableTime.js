import React from 'react';

class TableTime extends React.Component {
    showTimeEntries(){

    }
    render () {
        const listOfTimeEntries = this.props.listOfTimeEntries
        const listItems = listOfTimeEntries.map((timeEntry) => {return timeEntry} )
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