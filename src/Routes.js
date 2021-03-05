import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import VerifyAccount from "./components/registration/VerifyAccount";
import Dashboard from "./components/Dashboard/Dashboard";
import Checkout from "./components/EmployeeRegistration/Checkout";

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <Route path="/verify" component={VerifyAccount} />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/registration" component={Checkout} />

    </Switch>
  </Router>
);
export default Routes;