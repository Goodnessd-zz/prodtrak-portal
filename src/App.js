import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header'
import AdminPage from './Pages/AdminPage/AdminPage'
import CourseOverviewPage from './Pages/CourseOverviewPage/CourseOverviewPage'
import AuthHomePage from './Pages/AuthHomePage/AuthHomePage'
import UnAuthHomePage from './Pages/UnAuthHomePage/UnAuthHomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path = "/" component = {UnAuthHomePage}/>
            <Route path = "/home" component = {AuthHomePage}/>
            <Route path = "/courses" component = {CourseOverviewPage}/>
            <Route path = "/admin" component = {AdminPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
