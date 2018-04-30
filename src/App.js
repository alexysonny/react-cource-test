import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom'
import Navbar from "./components/navbar.jsx";
import Home from './pages/home';
import News from './pages/news';
import Profile from './pages/profile';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
