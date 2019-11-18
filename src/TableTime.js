import React from 'react';

class TableTime extends React.Component {
    render () {
        return (
            <table>
            <thead>
                <tr>
                <th>Task</th>
                <th>Project</th>
                <th>start</th>
                <th>end</th>
                </tr>
            </thead>
            <tbody>
                { this.props.children[0] }
                { this.props.children[1] }
                { this.props.children[2] }
            </tbody>
            </table>
        )
    }
 }




export default TableTime;