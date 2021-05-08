import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Expired from '../../pages/Expired';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/monitor" component={Home} />
      <Route exact path="/monitor/auth/login" component={Login} />
      <Route exact path="/monitor/expired" component={Expired} />
      {/* <Redirect path="*" to="/monitor" /> */}
      <Route render={() => <Redirect exact to={{ pathname: '/monitor' }} />} />
    </Switch>
  </Router>
);

export default AppRouter;
