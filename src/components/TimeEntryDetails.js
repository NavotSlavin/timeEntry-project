import React from 'react';
import '../scss/TableTime.scss'


class TimeEntryDetails extends React.Component {

    render() {
        return (
            <div className="rTableRow">
                <div className="tableCol">{ this.props.task }</div>
                <div className="tableCol">{ this.props.project }</div>
                <div className="tableCol">{ this.props.startTime }</div>
                <div className="tableCol">{ this.props.endTime }</div>
            </div>
        )
    }
}

export default TimeEntryDetails;