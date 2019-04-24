import React, { Component } from 'react';
//import './App.css';
import Users from './Users';
import СrossZero from './СrossZero';
import Snake from './Snake';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {isAdmin: props.isAdmin};
      }

    
    render(){
        const {isAdmin} = this.state;
        return (
        <Router>
            <div>
                <nav class="nav"> 
                    <ul class="nav nav-tabs">
                    {isAdmin && <li class="nav-item"><Link class="nav-link" to="/users/">Users</Link></li>}
                    <li class="nav-item"><Link class="nav-link" to="/crosszero/">Сross-zero</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/snake/">Snake</Link></li>
                    </ul>
                </nav>
                <div className="content">
                    {isAdmin && <Route path="/users"  render={(props)=><Users {...props}/>}  />}
                    <Route path="/crosszero/" component={СrossZero} />
                    <Route path="/snake/" component={Snake} />
                </div>
            </div>
        </Router>
        );
    }

}

  export default Home;