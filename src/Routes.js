import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./component/login/Login";
import Registration from "./component/registration/Registration";
import VerifyAccount from "./component/registration/VerifyAccount";

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <Route path="/verify" component={VerifyAccount} />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
);
export default Routes;