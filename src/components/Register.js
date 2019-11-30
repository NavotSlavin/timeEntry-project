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
            name: '',
            errors: {
                username: [],
                password: [],
                email: [],
                address: [],
                name: []
            }
        }
    }

    validateForm = (name, email, username, address, password ) => {
        // we are going to store errors for all fields
        const errors = {
            username: [],
            password: [],
            email: [],
            address: [],
            name: []
        };
      
        if (name.length === 0) {
          errors.name.push("Name can't be empty");
        }

        if (username.length === 0) {
            errors.username.push("Username can't be empty");
        }
        
        if (address.length === 0) {
            errors.address.push("Address can't be empty");
        }
      
        if (email.length < 5) {
          errors.email.push("Email should be at least 5 charcters long");
        }

        if (email.split("").filter(x => x === "@").length !== 1) {
          errors.email.push("Email should contain a @");
        }

        if (email.indexOf(".") === -1) {
          errors.email.push("Email should contain at least one dot");
        }
      
        if (password.length < 2) {
          errors.password.push("Password should be at least 6 characters long");
        }
        return errors;
      }

      isFormWithErrors(errors){
          let hasErrors = false;
          for(let key in errors){  
              if(errors[key].length > 0){
                hasErrors = true;
                break;
              }
          }
          return hasErrors;
      }

    onAddUser = (event) => {
        event.preventDefault();
        const { username, password, email, address, name} = this.state
        const errors = this.validateForm(name, email, username, address, password);
        if (this.isFormWithErrors(errors)) {
          this.setState({ errors });
          return;
        }

        axios.post(`${Config.serverUrl}/app/user/register`, {
            user_name: username,
            password: password,
            email : email,
            address: address,
            name: name
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

                        {this.state.errors.name.map(error => (
                            <p className="error" key={error}>Error: {error}</p>
                            ))}

                        <div className="inputForm">
                            <input type="text"   placeholder="user name"
                            value={this.state.username}
                            onChange={ e => this.setState({ username : e.target.value})}
                             /> 
                        </div>

                        {this.state.errors.username.map(error => (
                            <p  className="error"  key={error}>Error: {error}</p>
                            ))}

                        <div className="inputForm">
                            <input type="email"  placeholder="email"
                                    value={this.state.email}
                                    onChange={ e => this.setState({ email : e.target.value})}
                                     /> 
                        </div>

                        {this.state.errors.email.map(error => (
                            <p  className="error"  key={error}>Error: {error}</p>
                            ))}

                        <div className="inputForm">
                            <input type="text" placeholder="address" 
                            value={this.state.address}
                            onChange={ e => this.setState({ address : e.target.value})}
                            /> 
                        </div>

                        {this.state.errors.address.map(error => (
                            <p  className="error"  key={error}>Error: {error}</p>
                            ))}

                        <div className="inputForm">
                            <input type="password" placeholder="password" 
                             value={this.state.password}
                            onChange={ e => this.setState({ password : e.target.value})}
                            /> 
                        </div> 
                        
                        {this.state.errors.password.map(error => (
                            <p  className="error"  key={error}>Error: {error}</p>
                            ))}

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