import React from 'react';

class DropdownProjects extends React.Component {
    state = {listOfProjects : ["eLoomina", "Project 1", "Project 2", "Project 3"]}
    render() {
        let listOfProjects = this.state.listOfProjects.map((project, index) => {
            return <option key={index} value={project}>{project}</option>
         })
        return (//this.setState({ project : e.target.value}
            <select className="selectDrop" value={this.state.value} onChange={e => this.props.setProject(e.target.value)}>
            <option value=''>Add Project</option>
                {listOfProjects}
            </select>   
        )
    }
}

export default DropdownProjects;