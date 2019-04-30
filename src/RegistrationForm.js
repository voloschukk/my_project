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
  
    onFieldChange = event => {
      this.setState({[event.target.name]: event.target.value});
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
          <div className="container">
            <button className="btn btn-warning" onClick = {() => this.gotoLog()}> Login Form </button>
          </div>
          <div className="form-group">
            <div>Registration Form</div>
            <TextField name="userLogin" label="Login" onChange={this.onFieldChange} />
            <TextField name="userPassword" label="Password" onChange={this.onFieldChange} />
            <TextField name="phoneNumber" label="Phone number" onChange={this.onFieldChange} />
            <input className="btn btn-primary" type="button" value="Registration" onClick = {() => this.onClickRegistration()}/>
          </div>
          <div className="container">
            <div className="alert alert-danger" role="alert">{this.state.info}</div>
          </div>
        </div>
      );
    }
  }

  export default RegistrationForm;
  