import React, {Component} from 'react';

class TaskLine extends Component{
    state = {
        taskLine: this.props.data,
    };

    render(){
        const {taskLine} = this.state;
        return(
            <tr>
                <td>
                    {taskLine.id}
                </td>
                <td>
                    <div id={taskLine.id} onDoubleClick={this.editTask}>
                        {taskLine.todo}
                    </div>
                </td>
                <td>{this.props.ch && 
                    <input type="checkbox" id={taskLine.id.toString()} checked={taskLine.check} onChange={this.props.checkTask} />}

                </td>
                <td>
                    {taskLine.check.toString()}
                </td>
            </tr>
        )
    }
}

export default TaskLine;
