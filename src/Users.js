import React, { Component } from 'react';
//import './App.css';



class UsersList extends Component{
    constructor(props){
        super(props);
        this.state = {usersList: JSON.parse (localStorage.getItem ("usersList"))};
    }

    deleteItem = event => {
        const isDelete = window.confirm("You want to delete user - Are you sure?");
        if (isDelete){
            const usersList = this.state.usersList;
            usersList.splice(event.target.id, 1);
            //delete usersList[event.target.id];
            this.setState({usersList : usersList});
            localStorage.setItem ("usersList", JSON.stringify(usersList));
        }
    }


    onChangeAccess= event => {
        const usersList = this.state.usersList;
        const idUser = event.target.id;
        for (let i=0; i<usersList.length; i++){
            if(usersList[i].id == idUser){
                event.target.checked? usersList[i].access = true: usersList[i].access = false;
                break;
            }
        }
        this.setState({usersList : usersList});
        localStorage.setItem ("usersList", JSON.stringify(usersList));
    }

    onChangeAdmin= event => {
        const usersList = this.state.usersList;
        const idUser = event.target.id;
        for (let i=0; i<usersList.length; i++){
            if(usersList[i].id == idUser){
                event.target.checked? usersList[i].admin = true: usersList[i].admin = false;
                break;
            }
        }
        this.setState({usersList : usersList});
        localStorage.setItem ("usersList", JSON.stringify(usersList));
    }


    render(){

        const usersList = this.state.usersList;
        const listItems = usersList.map((usersList) => 
        <tr>
            <td>
                {usersList.id}
            </td>
            <td>
                {usersList.name}
            </td>
            <td>
                {usersList.password}
            </td>
            <td align="center">
                <input id={usersList.id.toString()} type="checkbox" defaultChecked={usersList.access} onChange={this.onChangeAccess} />
            </td>
            <td align="center">
                <input id={usersList.id.toString()} type="checkbox" defaultChecked={usersList.admin} onChange={this.onChangeAdmin} />
            </td>
            <td align="center">
                <button id={usersList.id.toString()} onClick={this.deleteItem}>Delete</button>
            </td>
        </tr>
        );    
        
        
        return (
            <div>
                <table class="table table-striped table-dark table-bordered table-hover table-sm">
                <caption>Users List</caption>
                    <tr>   
                        <th>Id</th><th>Name</th><th>Password</th><th>Access</th><th>Admin</th><th>Delete</th>
                    </tr>
                    {listItems}
                </table>
            </div>
        );
    }
    
}

  

export default UsersList;