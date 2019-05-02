import React, {Component} from 'react';

class Todo extends Component{

        state = {
            newTask: null,
            todoList: [],
            doneList: [],
        };

    onCangeNewTask = event => {
        this.setState({newTask: event.target.value})
    };

    addNewTask = () => {
        if (this.state.newTask){
            const {todoList} = this.state;
            var id;
            if (todoList.length === 0){
                id = 1;
            }
            else{
                id = todoList[todoList.length-1].id + 1;
            }
            const newTask = {id: id, todo: this.state.newTask, check: false};
            todoList[todoList.length] = newTask;
            this.setState({todoList: todoList, newTask: ""});
        }
    };

    addToDoneList = () => {
        const {todoList, doneList} = this.state;
        for (let i=0; i<todoList.length; i++){
            if(todoList[i].check === true){
                doneList[doneList.length] = { todo: todoList[i].todo };
            }
        }
        for (let i=todoList.length-1; i>=0; i--){
            if(todoList[i].check === true){
                todoList.splice(i,1);
            }
        }
        this.setState({todoList : todoList, doneList : doneList,});
    }


    editTask = event => {
        const text = event.target.innerHTML;
        const result = prompt("Edit", text);
        if (result)
        {
            const {todoList} = this.state;
            const newTask = {id: parseInt(event.target.id), todo: result, check: false};
            todoList[event.target.id] = newTask;
            this.setState({todoList: todoList});
        }
    };

    checkTask= event => {
        const {todoList} = this.state;
        const idTask = event.target.id;
        for (let i=0; i<todoList.length; i++){
            if(todoList[i].id.toString() === idTask){
                event.target.checked? todoList[i].check = true: todoList[i].check = false;
                break;
            }
        }
        this.setState({todoList : todoList});
    }

    render(){
        const {todoList, doneList} = this.state;
        
        const todoListItems = todoList.map((todoList) =>
            <tr>
                <td>
                    {todoList.id}
                </td>
                <td>
                    <div id={todoList.id} onDoubleClick={this.editTask}>
                        {todoList.todo}
                    </div>
                </td>
                <td>
                    <input type="checkbox" id={todoList.id.toString()} defaultChecked={todoList.check} onChange={this.checkTask} />
                </td>
                <td>
                    {todoList.check.toString()}
                </td>
            </tr>
        );

        const doneListItems = doneList.map((doneList) =>
            <tr>
                <td>
                    {doneList.todo}
                </td>
            </tr>
        );

        return(
            <div>
                <div className="container mt-3 mb-2">
                    <div className="row">
                        <div className="col-sm">
                            <input className="form-control" type="text" id="newTask" value={this.state.newTask} onChange={this.onCangeNewTask}/>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-light" id="addNewTask" onClick={this.addNewTask}>Add new task</button>
                        </div>
                        <div className="col-md-auto">
                            <button className="btn btn-light" id="addToDoneList" onClick={this.addToDoneList}>Done</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <table className="table table-striped table-light table-bordered table-hover table-sm">
                    <caption>TODO List</caption>
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

                <div className="container">
                <table className="table table-striped table-light table-bordered table-hover table-sm">
                <caption>Done List</caption>
                    <thead className="thead-light">
                        <tr>   
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doneListItems}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default Todo;