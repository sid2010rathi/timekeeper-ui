import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import EmployeeOnboard from "../EmployeeRegistration/EmployeeOnboard";
import AddressForm from "../EmployeeRegistration/AddressForm";

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="dashboard/employee_onboard" component={AddressForm} />
    </Switch>
  </Router>
);
export default Routes;