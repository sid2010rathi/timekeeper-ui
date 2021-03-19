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
import EmployeeScheduling from "./components/EmployeeScheduling/EmployeeScheduling";

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <Route path="/verify" component={VerifyAccount} />
      {/* <Route path="/employee_onboard" component={EmployeeOnboard} /> */}
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/dashboard" component={DashboardLayout} />
      <Route path="/update" component={EmployeeUpdate} />
      <Route path="/schedule" component={EmployeeScheduling} />
    </Switch>
  </Router>
);
export default Routes;