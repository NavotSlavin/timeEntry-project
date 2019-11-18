import React from 'react';
import '../scss/TimeEntryDetails.scss'


class TimeEntryDetails extends React.Component {

    render() {
        return (
            <tr>
                <td>{ this.props.task }</td>
                <td>{ this.props.project }</td>
                <td>{ this.props.startTime } </td>
                <td>{ this.props.endTime }</td>
            </tr>
        )
    }
}



export default TimeEntryDetails;