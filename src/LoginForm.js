import React, { Component } from 'react';
import TextField from './TextField';
//import './App.css';

class LoginForm extends Component {
    state = {
      login: "",
      password: "",
      info: "",
    };

    onSMTChange = event => {
      if (event.target.name === "Login") this.setState({login: event.target.value});
      if (event.target.name === "Password") this.setState({password: event.target.value});
    }

    gotoReg = () =>{
        this.props.history.push('/registration');
    }

    onClickLogin(){
        const {login, password} = this.state;
        const usersList = JSON.parse (localStorage.getItem ("usersList"));
        for (let i=0; i<usersList.length; i++){
          if(usersList[i].name === login && usersList[i].password === password && usersList[i].access === true ){
            this.setState({info : ""});
            this.props.isSuccess(usersList[i]);
            return;
          };
        };

        if("admin" === login && "admin" === password ){
          this.setState({info : ""});
          this.props.isSuccess({id: 0, name: "admin", password: "admin", access: true, admin: true});
        }

        this.setState({info : "Incorrect login or password"});
    };

  
    render() {
      return (
        <div>
          <div class="container">
            <button class="btn btn-warning" onClick = {() => this.gotoReg()}> Registration Form </button>
          </div>
          <div class="form-group">
            <div>Login Form</div>
              <TextField name="Login" label="Login" onChange={this.onSMTChange} />
              <TextField name="Password" label="Password" onChange={this.onSMTChange} />
              <input type="button" class="btn btn-primary" value="LogIn" onClick = {() => {this.onClickLogin()}}/>
          </div>
          <div class="container">
            <div className="info" class="alert alert-danger" role="alert">{this.state.info}</div>
          </div>
        </div>
      )
    }
  }

  export default LoginForm;