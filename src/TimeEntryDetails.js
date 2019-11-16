import React from 'react';


const TimeEntryDetails = (props) => {
    return (
        <div className="time entry container">
            <div className="text"> { props.task } </div>
            <div className="text"> { props.project } </div>
            <div className="time">
                <span className="startTime"> { props.startTime } </span>
                <span className="endTime"> { props.endTime } </span>
            </div>
            <div className="timer">{ props.timer } </div>
        </div>
    );
}



export default TimeEntryDetails;