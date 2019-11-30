//import the react and react-dom libraries
import React from 'react';
import axios from 'axios';
import TableTime from './TableTime';
import TimeEntryBar from './TimeEntryBar';
import '../scss/App.scss'
const Config = require('Config')


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listOfTimeEntries : [],
            userId : ''
        }
    }

    onAddBarSubmit = (task, project, startTime, endTime) => {
        const userId = this.state.userId;
        let currentListOfTimeEntries = this.state.listOfTimeEntries;
        currentListOfTimeEntries.push({task : task, project : project, startTime : startTime, endTime : endTime, userId: userId})
        //get from server all the entry times so far
        axios.post(`${Config.serverUrl}/app/time-entries`, {
            task: task,
            project: project,
            startTime : startTime,
            endTime : endTime,
            userId: userId 
          },  {
            headers: {token: localStorage.token}
          })
          .then((response) => {
            this.componentDidMount()
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    componentDidMount = () => {
        // when a component first render
        let token = localStorage.getItem('token');
        const userId = this.props.match.params.id;
        axios.get(`${Config.serverUrl}/app/time-entries/`, {
            headers : {
                token : token
            },
            params: {
              id: userId
            }
          })
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
            this.setState({listOfTimeEntries : listItems, userId : userId});
        })
        .catch((error) => {
            alert(error);
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