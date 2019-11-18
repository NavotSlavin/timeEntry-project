import './scss/index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'



//take the react component  and show it on the scree
ReactDOM.render(
    <App/>,//component
    document.querySelector('#root')  //dom element ref
);