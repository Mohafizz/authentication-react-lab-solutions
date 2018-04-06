import React from "react";
import { isAuthenticated } from "../../utils/AuthService";

const WelcomeComponent = () => (
  <div>
    <h1>My React App</h1>
    {isAuthenticated() ? (
      <p>You have successfully signed in.</p>
    ) : (
      <p>Please sign in.</p>
    )}
  </div>
);

export default WelcomeComponent;
