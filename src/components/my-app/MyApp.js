import React, { Component } from "react";
import { Route } from "react-router-dom";
import AuthenticationForm from "../authentication-form/AuthenticationForm";
import TopNavBar from "../top-nav-bar/TopNavBar";
import WelcomeComponent from "../welcome-component/WelcomeComponent";
import PrivateRoute from "../private-route/PrivateRoute";

class MyApp extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <br />
        <Route exact path="/" component={WelcomeComponent} />
        <Route
          path="/signup"
          render={props => (
            <AuthenticationForm
              title="Sign up"
              auth_endpoint="/api/users"
              {...props}
            />
          )}
        />
        <Route
          path="/signin"
          render={props => (
            <AuthenticationForm
              title="Sign in"
              auth_endpoint="/api/users/login"
              {...props}
            />
          )}
        />

        <PrivateRoute />
      </div>
    );
  }
}

export default MyApp;
