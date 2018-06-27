import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';
import Home from './components/home'; 
import Employee from './components/Employee-list';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="ui menu four item">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/employees">Employees</Link>
          <Link className="item" to="/about">About</Link>

        </div>
        <h3>
          Employee Details
        </h3>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees" component={Employee} />
          <Route path="/about" component={About} />
          
        </Switch>
        
        
      </div>
    );
  }
}

export default App;
