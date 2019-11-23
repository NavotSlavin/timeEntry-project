import React from 'react';

class DropdownProjects extends React.Component {
    state = {listOfProjects : ["eLoomina", "Project 1", "Project 2", "Project 3"]}
    render() {
        let listOfProjects = this.state.listOfProjects.map((project) => {
            return <option value={project}>{project}</option>
         })
        return (
            <select value={this.props.project} onChange={e => this.props.handleDropDownChange()}>
                    {listOfProjects}
            </select>
        )
    }
}

export default DropdownProjects;