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

    onSubmit = () => {

    }
    render() {
        return (    
            <div className="wrapper">
                <div className="formWrapper">
                <h3>eLoomina login </h3>
                    <form className="formContent">
                        <div className="inputForm">
                            <input type="text"
                                    id="email"  
                                    name="login" 
                                    placeholder="email" 
                                    value={this.state.email}
                                    onChange={ e => this.setState({ email : e.target.value})}
                            /> 
                        </div>
                        <div className="inputForm">
                            <input type="text" id="password"  name="login" placeholder="password" /> 
                        </div>
                    </form>
                    <div className="formButtonsWrapper">
                            <input id="loginButton" type="submit" value="Log In"  onSubmit={this.onSubmit()}/>    
                    </div>
                    <div>
                        <Link id= "resiterlink" to="/register">Register</Link>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;