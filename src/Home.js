import React, { Component } from 'react';
import Users from './Users';
import СrossZero from './СrossZero';
import Snake from './Snake';
import Todo from './Todo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {isAdmin: props.isAdmin};
      }

    
    render(){
        const {isAdmin} = this.state;
        return (
        <Router>
            <div className="mt-3 mb-3">
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav nav-tabs">
                    {isAdmin && <li className="nav-item"><Link className="nav-link" to="/users/">Users</Link></li>}
                    <li className="nav-item"><Link className="nav-link" to="/todo/">TODO</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/crosszero/">Сross-zero</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/snake/">Snake</Link></li>
                    </ul>
                </div> 
                </nav>
                <div className="content">
                    {isAdmin && <Route path="/users"  render={(props)=><Users {...props}/>}  />}
                    <Route path="/todo/" component={Todo} />
                    <Route path="/crosszero/" component={СrossZero} />
                    <Route path="/snake/" component={Snake} />
                </div>
                
            </div>
        </Router>
        );
    }

}

  export default Home;