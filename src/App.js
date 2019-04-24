import React, { Component } from 'react';
//import './App.css';
import Home from './Home';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//hello
const usersList = [{id: 0, name: '1', password: '1', access: true, admin: false},
                  {id: 1, name: 'user1', password: 'password1', access: true, admin: false},
                 {id: 2, name: 'user2', password: 'password2', access: true, admin: false},
                 {id: 3, name: 'user3', password: 'password3', access: true, admin: false},
                 {id: 4, name: 'user4', password: 'password4', access: true, admin: false}];

                 localStorage.setItem ("usersList", JSON.stringify(usersList));
                // usersList = JSON.parse (localStorage.getItem ("usersList"));


class App extends Component {

  state = {
    isUserLoggedIn: false,
    isAdmin: false,
    login: "",
  };


  onClickLogouth(){
    this.setState({isUserLoggedIn: false});
    this.props.history.push('/login');
  };

  isSuccess(user){
      this.setState({isUserLoggedIn: true, login: user.name});
      this.setState({isAdmin: user.admin});
      this.props.history.push('');
  };

  
  render(){
    const{isUserLoggedIn, login, isAdmin} = this.state;
    return (
      <div className="App">
        <div className="primary-header" class="container">
            <Router>
              <div className="content">
                  {!isUserLoggedIn && <Route path="/login"  render={(props)=>
                    <LoginForm isSuccess={(user)=>this.isSuccess(user)} {...props}/> } />}
                  {!isUserLoggedIn && <Route path="/registration/" render={(props)=> 
                    <RegistrationForm  {...props} /> } />}
              </div>
            </Router>
            {isUserLoggedIn && <Welcome history={this.props.history} login={login} onClickLogouth={()=>this.onClickLogouth()} />}
        </div>
        <div class="container">
          <Router>
            {isUserLoggedIn && <Route exect path="/" render={(props)=>
                <Home isAdmin={isAdmin} usersList={usersList} {...props}/> } />}
          </Router>
        </div>
      </div>
    );
  }

}

export default withRouter(App);