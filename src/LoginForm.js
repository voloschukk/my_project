import React, { Component } from 'react';
import TextField from './TextField';
//import './App.css';

class LoginForm extends Component {
    state = {
      login: "",
      password: "",
      info: "",
    };

    onFieldChange = event => {
      this.setState({[event.target.name]: event.target.value});
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
            this.props.onSuccess(usersList[i]);
            return;
          };
        };

        if("admin" === login && "admin" === password ){
          this.setState({info : ""});
          this.props.onSuccess({id: 0, name: "admin", password: "admin", access: true, admin: true});
        }

        this.setState({info : "Incorrect login or password"});
    };

  
    render() {
      return (
        <div>
          <div className="container">
            <button className="btn btn-warning" onClick = {() => this.gotoReg()}> Registration Form </button>
          </div>
          <div className="form-group">
            <div>Login Form</div>
              <TextField name="login" label="Login" onChange={this.onFieldChange} />
              <TextField name="password" label="Password" onChange={this.onFieldChange} />
              <input type="button" className="btn btn-primary" value="LogIn" onClick = {() => {this.onClickLogin()}}/>
          </div>
          <div className="container">
            <div className="alert alert-danger" role="alert">{this.state.info}</div>
          </div>
        </div>
      )
    }
  }

  export default LoginForm;