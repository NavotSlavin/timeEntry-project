import React from 'react';
import '../scss/TableTime.scss'


class TimeEntryDetails extends React.Component {

    render() {
        return (
            <div className="rTableRow">
                <div className="rTableCell">{ this.props.task }</div>
                <div className="rTableCell">{ this.props.project }</div>
                <div className="rTableCell">{ this.props.startTime }</div>
                <div className="rTableCell">{ this.props.endTime }</div>
            </div>
        )
    }
}

export default TimeEntryDetails;