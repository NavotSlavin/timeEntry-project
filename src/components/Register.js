import React from 'react';
import {  Link } from "react-router-dom"
import '../scss/Login.scss'
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
    render() {
        return (    
            <div className="wrapper">
                <h1>eLoomina Resigter page</h1>
                <div id="formContent">
                    <form className="formWrapper">
                        <div>
                            <input type="text" id="name"  placeholder="name" /> 
                        </div>
                        <div>
                            <input type="text" id="username"  placeholder="user name" /> 
                        </div>
                        <div>
                            <input type="text" id="email"  placeholder="email" /> 
                        </div>
                        <div>
                            <input type="text" id="address" placeholder="address" /> 
                        </div>
                        <div>
                            <input type="text" id="password"placeholder="password" /> 
                        </div>
                        <input id="loginButton" type="submit" value="Register" />                
                    </form>
                </div>
            </div>
        )
    }
}

export default Resigter;