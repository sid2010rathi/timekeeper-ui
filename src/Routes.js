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
import DashboardLayout from "./components/Layout/DashboardLayout";
import EmployeeOnboard from "./components/EmployeeRegistration/EmployeeOnboard";
import EmployeeUpdate from "./components/EmployeeUpdateComponent";

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <Route path="/verify" component={VerifyAccount} />

      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/dashboard" component={DashboardLayout} />
      <Route path="/update" component={EmployeeUpdate} />
    </Switch>
  </Router>
);

export const UnauthenticatedRoutes = (props) => {
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
}

export const AuthenticatedRoutes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/dashboard" component={DashboardLayout} />
      <Route path="/update" component={EmployeeUpdate} />
    </Switch>
  </Router>
);