import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Link, NavLink} from 'react-router-dom';
import Login from './components/Login';
import PartsForm from './components/PartsForm';
import PartsList from './components/PartsList';
import ContactForm from './components/ContactForm';
import SubmitParts from './components/Parts';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><NavLink to="/">Login</NavLink></li>
              <li><NavLink to="/SubmitParts">Submit Parts</NavLink></li>
            {/* <li><NavLink to="/parts-list">Parts List</NavLink></li> */}
              <li><NavLink to="/create">Add parts Form</NavLink></li>
            </ul>
            
            <Route exact path="/" component={Login}/>
            <Route path="/SubmitParts" component={SubmitParts}/>
            {/* <Route path="/parts-list" component={PartsList}/> */}
            <Route path="/create" component={PartsForm}/>
          
            
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
