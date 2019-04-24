import React, { Component } from 'react';
//import './App.css';

class Welcome extends Component {
    constructor(props) {
      super(props);
    }

    onClickLogOut(){
        this.props.onClickLogouth();
        

    };


  render() {
  return (
    <div>
      <div>Welcome, {this.props.login}!</div>
      <button onClick = {() => {this.onClickLogOut()}}> LogOut </button>
    </div>
  )
  }
}

export default Welcome;