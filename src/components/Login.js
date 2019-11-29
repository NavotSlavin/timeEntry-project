import React from 'react';
import {  Redirect, Link } from "react-router-dom";
import axios from 'axios';
import '../scss/Login.scss'
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            password:'',
            email : ''
        }
    }

    onLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/app/user/login', {
            email : this.state.email,
            password: this.state.password
          })
          .then((response) => {
            const userId = response.data._id;
            sessionStorage.setItem('token', response.data.token);
            //set token state for all componenets
            localStorage.setItem('token', response.data.token);
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
                        <div className="inputForm">
                            <input type="password" 
                                    id="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={ e => this.setState({ password : e.target.value})}
                            /> 
                        </div>
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