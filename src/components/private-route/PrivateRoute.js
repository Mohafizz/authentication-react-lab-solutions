import React from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../utils/AuthService";
import PrivilegedComponent from "../privileged-component/PrivilegedComponent";

const PrivateRoute = () =>
  isAuthenticated() ? <PrivilegedComponent /> : <Redirect to="/" />;

export default PrivateRoute;
