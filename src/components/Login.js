import React from 'react';
import {  Link } from "react-router-dom"
import '../scss/Login.scss'
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            username:'',
            password:'',
            email : ''
        }
    }
    render() {
        return (    
            <div className="wrapper">
                <h1>eLoomina login page</h1>
                <div id="formContent">
                    <form className="formWrapper">
                        <div>
                            <input type="text" id="email"  name="login" placeholder="email" /> 
                        </div>
                        <div>
                            <input type="text" id="password"  name="login" placeholder="password" /> 
                        </div>
                        <div className="formButtonsWrapper">
                            <input id="loginButton" type="submit" value="Log In" />  
                            <Link id= "resiterlink" to="/register">Register</Link>    
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;