import React, { Component } from 'react';
import TextField from './TextField';
//import './App.css';

class RegistrationForm extends Component {
    state = {
      userLogin: "",
      userPassword: "",
      phoneNumber: "",
      info: "",
    };
  
    onSMTChange = event => {
      if (event.target.name === "userLogin") this.setState({userLogin: event.target.value});
      if (event.target.name === "userPassword") this.setState({userPassword: event.target.value});
      if (event.target.name === "phoneNumber") this.setState({phoneNumber: event.target.value}); 
    }

    gotoLog = () =>{
        this.props.history.push('/login');
    }

    onClickRegistration (){
        const {userLogin, userPassword} = this.state;
        const regex = /[A-Za-z]{3,}/;
        if(regex.test(userLogin) && regex.test(userPassword)){
            const usersList = JSON.parse (localStorage.getItem ("usersList"));
            const iNew = usersList.length;
            const idNew = usersList[usersList.length-1].id + 1;
            usersList[iNew] = {id: idNew, name: userLogin, password: userPassword, access: true, admin: false};
            localStorage.setItem ("usersList", JSON.stringify(usersList));
            this.props.history.push('/login');
        }
        else{
          this.setState({info : "Field must have more then 3 symbols A-Z a-z"});
        }
      }
  
    render() {
      return (
        <div>
          <div class="container">
            <button class="btn btn-warning" onClick = {() => this.gotoLog()}> Login Form </button>
          </div>
          <div class="form-group">
            <div>Registration Form</div>
            <TextField name="userLogin" label="Login" onChange={this.onSMTChange} />
            <TextField name="userPassword" label="Password" onChange={this.onSMTChange} />
            <TextField name="phoneNumber" label="Phone number" onChange={this.onSMTChange} />
            <input class="btn btn-primary" type="button" value="Registration" onClick = {() => this.onClickRegistration()}/>
          </div>
          <div class="container">
            <div className="info" class="alert alert-danger" role="alert">{this.state.info}</div>
          </div>
        </div>
      );
    }
  }

  export default RegistrationForm;
  