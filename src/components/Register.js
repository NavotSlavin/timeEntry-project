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
                
                <div className="formWrapper">
                <h3>eLoomina Resigter </h3>
                    <form className="formContent">
                        <div className="inputForm">
                            <input type="text" placeholder="name" /> 
                        </div>
                        <div className="inputForm">
                            <input type="text"   placeholder="user name" /> 
                        </div>
                        <div className="inputForm">
                            <input type="email"  placeholder="email" /> 
                        </div>
                        <div className="inputForm">
                            <input type="text" placeholder="address" /> 
                        </div>
                        <div className="inputForm">
                            <input type="password" placeholder="password" /> 
                        </div>               
                    </form>
                    <div>
                        <input id="loginButton" type="submit" value="Register" /> 
                    </div> 
                </div>
    
            </div>
        )
    }
}

export default Resigter;