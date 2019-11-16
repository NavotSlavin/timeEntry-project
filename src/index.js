//import the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import TimeEntryDetails from './TimeEntryDetails'
import TableTime from './TableTime';

//create a react component
const App = function(){
    return (
        <div className="ui container timeEntries">
            <TableTime>
                <TimeEntryDetails 
                task="task1"
                project="project1"
                startTime="11:00 am"
                endTime="11:55 am"
                timer="00:03"
                />
                <TimeEntryDetails 
                    task="task2"
                    project="project2"
                    startTime="12:00 pm"
                    endTime="12:55 pm"
                    timer="00:09"
                />
            </TableTime>
        </div>
    );
};

//take the react component  and show it on the scree
ReactDOM.render(
    <App/>,//component
    document.querySelector('#root')  //dom element ref
);