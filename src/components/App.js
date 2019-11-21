//import the react and react-dom libraries
import React from 'react';
import axios from 'axios'
import TableTime from './TableTime';
import TimeEntryBar from './TimeEntryBar';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listOfTimeEntries : []
        }
    }

    onAddBarSubmit = (task, project, startTime, endTime) => {
        let currentListOfTimeEntries = this.state.listOfTimeEntries;
        currentListOfTimeEntries.push({task : task, project : project, startTime : startTime, endTime : endTime})
        this.setState({listOfTimeEntries : currentListOfTimeEntries})
        //get from server all the entry times so far
        // axios.get('http://localhost:3000/time-entries', {
        //     params : {},
        //     headers : {
        //         //navot put here the token when you add login
        //     }
        // })
    }

    render(){
        return (
            <div className="ui container timeEntries">
                <TimeEntryBar onSubmit={this.onAddBarSubmit}/>
                <TableTime listOfTimeEntries={this.state.listOfTimeEntries}/>
            </div>
        )
    }
}

export default App;