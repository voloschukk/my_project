import React, {Component} from 'react';
import TasksList from './TasksList';

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
                doneList[doneList.length] = todoList[i];
            }
        }
        for (let i=todoList.length-1; i>=0; i--){
            if(todoList[i].check === true){
                todoList.splice(i,1);
            }
        }
        console.log(doneList);
        console.log(todoList);
        this.setState({doneList : doneList, todoList : todoList});
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

    checkTask = (todoList1) => {
        this.setState({todoList : [...todoList1]});
    };

    render(){

        

        const {todoList, doneList} = this.state;


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

                <TasksList ch={true} list={todoList} checkTask={(todoList1)=>this.checkTask(todoList1)}/>

                <TasksList ch={false} list={doneList} />

            </div>
        );
    }
}

export default Todo;