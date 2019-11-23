//import the react and react-dom libraries
import React from 'react';
import axios from 'axios'
import TableTime from './TableTime';
import TimeEntryBar from './TimeEntryBar';
import '../scss/App.scss'

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

        axios.post('http://localhost:3001/app/time-entries', {
            task: task,
            project: project,
            startTime : startTime,
            endTime : endTime
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    componentDidMount = () => {
        // when a component first render
        axios.get('http://localhost:3001/app/time-entries')
        .then((response) => {
            const listItems = response.data.map((timeEntry) => {
                let currentItem = {
                    key : timeEntry._id,//mongo unique
                    task :  timeEntry.task,
                    project :  timeEntry.project,
                    startTime :  timeEntry.startTime,
                    endTime :  timeEntry.endTime
                }
                return currentItem;
             }) 
            this.setState({listOfTimeEntries : listItems});
        })
        .catch((error) => {
            console.log(error);
        });
      }

    render(){
        return (
            <div className="App">
                <TimeEntryBar className="timeEntryBar" onSubmit={this.onAddBarSubmit}/>
                <TableTime className="TableTime" listOfTimeEntries={this.state.listOfTimeEntries}/>    
            </div>
        )
    }
}

export default App;