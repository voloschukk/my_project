import React, { Component } from 'react';
//import './App.css';

class Welcome extends Component {

    onClickLogOut(){
        this.props.onClickLogouth();
        

    };


  render() {
  return (
    <div>
      <div>Welcome, {this.props.login}!</div>
      <button className="btn btn-light" onClick = {() => {this.onClickLogOut()}}> LogOut </button>
    </div>
  )
  }
}

export default Welcome;