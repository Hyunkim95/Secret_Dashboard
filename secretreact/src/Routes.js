import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import App from './App'
import Dashboard from './Dashboard'
import NoMatch from './NoMatch'

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)

export default Routes
