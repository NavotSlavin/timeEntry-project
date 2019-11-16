import React from 'react';


const TableTime = (props) => {
    return (
        <ul class="ui celled table">
            <li>
            { props.children[0] }
            </li>
            <li>
            { props.children[1] }
            </li>
        </ul>
    );
}



export default TableTime;