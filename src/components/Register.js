import React from 'react';
import axios from 'axios';
import '../scss/Login.scss';
const Config = require('Config')

class Resigter extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            username:'',
            password:'',
            email : '',
            address: '',
            name: ''
        }
    }

    onAddUser = (event) => {
        event.preventDefault();
        axios.post(`${Config.serverUrl}/app/user/register`, {
            user_name: this.state.username,
            password: this.state.password,
            email : this.state.email,
            address: this.state.address,
            name: this.state.name
          })
          .then((response) => {
            const userId = response.data._id;
            this.props.history.push(`/home/${userId}`);
          })
          .catch((error) => {
              alert("Could'nt create user. Please enter valid details.")
                console.log(error);
          });
    }

    render() {
        return (    
            <div className="wrapper">       
                <div className="formWrapper">
                <h3>eLoomina Resigter </h3>
                    <form className="formContent" onSubmit={this.onAddUser}>
                        <div className="inputForm">
                            <input type="text" placeholder="name"
                            value={this.state.name}
                            onChange={ e => this.setState({ name : e.target.value})} /> 
                        </div>
                        <div className="inputForm">
                            <input type="text"   placeholder="user name"
                            value={this.state.username}
                            onChange={ e => this.setState({ username : e.target.value})}
                             /> 
                        </div>
                        <div className="inputForm">
                            <input type="email"  placeholder="email"
                                    value={this.state.email}
                                    onChange={ e => this.setState({ email : e.target.value})}
                                     /> 
                        </div>
                        <div className="inputForm">
                            <input type="text" placeholder="address" 
                            value={this.state.address}
                            onChange={ e => this.setState({ address : e.target.value})}
                            /> 
                        </div>
                        <div className="inputForm">
                            <input type="password" placeholder="password" 
                             value={this.state.password}
                            onChange={ e => this.setState({ password : e.target.value})}
                            /> 
                        </div>   
                        <div>
                         <input id="loginButton" type="submit" value="Register" /> 
                        </div>             
                    </form>

                </div>
    
            </div>
        )
    }
}

export default Resigter;