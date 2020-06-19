import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

class App extends Component {
  render(){
    return(
      <>
        <Router>
          <Switch>
            <Route path="/login" exect component={Login}/>
            <Route path="/register" exect component={Register}/>
            <Route path="/home" exect component={Home}/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
