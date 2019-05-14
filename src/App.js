import React, { Component } from 'react';
import Home from './Home';
import Welcome from './login/Welcome';
import RegistrationForm from './login/RegistrationForm';
import LoginForm from './login/LoginForm';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';


const usersList = [{id: 1, name: 'user1', password: 'password1', access: true, admin: false},
                 {id: 2, name: 'user2', password: 'password2', access: true, admin: false},
                 {id: 3, name: 'user3', password: 'password3', access: true, admin: false},
                 {id: 4, name: 'user4', password: 'password4', access: true, admin: false}];

                 localStorage.setItem ("usersList", JSON.stringify(usersList));
                // usersList = JSON.parse (localStorage.getItem ("usersList"));


class App extends Component {

  state = {
    isUserLoggedIn: true,
    isAdmin: true,
    login: "",
  };


  onClickLogouth(){
    this.setState({isUserLoggedIn: false});
    this.props.history.push('/login');
  };

  onSuccess(user){
      this.setState({isUserLoggedIn: true, login: user.name});
      this.setState({isAdmin: user.admin});
      this.props.history.push('');
  };

  
  render(){
    const{isUserLoggedIn, login, isAdmin} = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="border border-primary p-3 mt-3 rounded">
              <Router>
                <div className="content">
                    {!isUserLoggedIn && <Route path="/login"  render={(props)=>
                      <LoginForm onSuccess={(user)=>this.onSuccess(user)} {...props}/> } />}
                    {!isUserLoggedIn && <Route path="/registration/" render={(props)=> 
                      <RegistrationForm  {...props} /> } />}
                </div>
              </Router>
              {isUserLoggedIn && <Welcome history={this.props.history} login={login} onClickLogouth={()=>this.onClickLogouth()} />}
              </div>
            </div>
            <div className="col">
              <Router>
                {isUserLoggedIn && <Route exect path="/" render={(props)=>
                    <Home isAdmin={isAdmin} usersList={usersList} {...props}/> } />}
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(App);