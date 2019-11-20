//import the react and react-dom libraries
import React from 'react';
import TimeEntryDetails from './TimeEntryDetails'
import TableTime from './TableTime';
import TimeEntryBar from './TimeEntryBar';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listOfTimeEntries : [
                <TimeEntryDetails 
                task="task1"
                project="project1"
                startTime="11:00 am"
                endTime="11:55 am"
                timer="00:03"
                />
            ]
        }
    }

    onBarSubmit(task, project) {
        console.log("app task : " + task)
        console.log("app project : " + project)
    }

    //for updating state do:
    //this.setState({listOfTimeEntries.push(something)})
    render(){
        return (
            <div className="ui container timeEntries">
                {/* <TimeEntryBar 
                    task={this.props.task}
                    project={this.props.project}
                /> */}
                <TimeEntryBar onSubmit={this.onBarSubmit}/>
                <TableTime listOfTimeEntries={this.state.listOfTimeEntries}/>
            </div>
        )
    }
}

export default App;