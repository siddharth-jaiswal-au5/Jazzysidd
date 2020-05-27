import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Details from './Components/Details';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route path="/" exact>
        <Redirect to="/page/1"/>
      </Route>
        <div>
          <Navbar />
          <Route path="/page/:page" component={List}/>
          <Route path="/movie/:id" component={Details}/>
        </div>
      </BrowserRouter>
      );
  }
}

export default App;
