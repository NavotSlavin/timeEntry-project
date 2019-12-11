import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../scss/Login.scss'
const Config = require('Config')
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            password:'',
            email : '',
            errors: {
                password: [],
                email: []
            }
        }
    }
    validateForm = (email,password ) => {
        // we are going to store errors for all fields
        const errors = {
            password: [],
            email: []
        };
      
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

    onLogin = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const errors = this.validateForm(email, password);
        if (this.isFormWithErrors(errors)) {
          this.setState({ errors });
          return;
        }
        axios.post(`${Config.serverUrl}/app/user/login`, {
            email : email,
            password: password
          })
          .then((response) => {
            const userId = response.data._id;
            sessionStorage.setItem('token', response.data.token);
            //set token state for all componenets
            sessionStorage.setItem('token', response.data.token);
            this.props.history.push(`/home/${userId}`);
          })
          .catch((error) => {
            alert(error)
            this.props.history.push(`/login`);     
          });
    }
    render() {
        return (    
            <div className="wrapper">
                <div className="formWrapper">
                <h3>eLoomina login </h3>
                    <form className="formContent"  onSubmit={this.onLogin}>
                        <div className="inputForm">
                            <input type="text"
                                    id="email"  
                                    placeholder="email" 
                                    value={this.state.email}
                                    onChange={ e => this.setState({ email : e.target.value})}
                            /> 
                        </div>

                        {this.state.errors.email.map(error => (
                            <p className="error" key={error}>Error: {error}</p>
                            ))}

                        <div className="inputForm">
                            <input type="password" 
                                    id="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={ e => this.setState({ password : e.target.value})}
                            /> 
                        </div>

                        {this.state.errors.password.map(error => (
                            <p className="error" key={error}>Error: {error}</p>
                            ))}

                        <div className="formButtonsWrapper">
                            <input id="loginButton" type="submit" value="Log In" />    
                        </div>
                        <div>
                            <Link id= "resiterlink" to="/register">Register</Link>  
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login;