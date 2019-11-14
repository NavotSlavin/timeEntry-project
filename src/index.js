//import the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = function(){
    return <div> Hello Navot</div>;
};

//take the react component  and show it on the scree
ReactDOM.render(
    <App/>,//component
    document.querySelector('#root')  //dom element ref
);