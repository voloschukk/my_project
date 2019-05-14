import React, {Component} from 'react';
import TaskLine from './TaskLine';

class TasksList extends Component{
    state = {
        todoList: this.props.list,
    };

    checkTask = event => {
        const {todoList} = this.state;
        const idTask = event.target.id;
        for (let i=0; i<todoList.length; i++){
            if(todoList[i].id.toString() === idTask){
                event.target.checked? todoList[i].check = true: todoList[i].check = false;
                break;
            }
        }
        this.props.checkTask(todoList);
    }

    render(){
        const {todoList} = this.state;
        
        const todoListItems = todoList.map((todoList) =>
            <TaskLine data={todoList} ch={this.props.ch} checkTask={(event) => this.checkTask(event)}/>
        )

        return(

            <div className="container">
                <table className="table table-striped table-light table-bordered table-hover table-sm">
                <caption>TODO List2</caption>
                    <thead className="thead-light">
                        <tr>   
                            <th>Id</th><th>Task</th><th>Check</th><th>Check status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoListItems}
                    </tbody>
                </table>
            </div>

        )
    }


}

export default TasksList;