import './scss/index.scss'
//import the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import TimeEntryDetails from './TimeEntryDetails'
import TableTime from './TableTime';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listOfTimeEntries : []
        }
    }

    //for updating state do:
    //this.setState({listOfTimeEntries.push(something)})
    render(){
        return (
            <div className="ui container timeEntries">
                <TableTime>  
                {/* {this.state.listOfTimeEntries} */}
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
                <TimeEntryDetails 
                    task="task3"
                    project="project3"
                    startTime="12:00 pm"
                    endTime="12:55 pm"
                    timer="00:09"
                />
                </TableTime>
            </div>
        )
    }
}

//take the react component  and show it on the scree
ReactDOM.render(
    <App/>,//component
    document.querySelector('#root')  //dom element ref
);