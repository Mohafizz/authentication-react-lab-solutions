import React, { Component } from "react";
import { isAuthenticated } from "../../utils/AuthService";
import "./PrivilegedComponent.css";

class PrivilegedComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      todos: []
    };
  }

  render() {
    return (
      <div className="privileged-content-body">
        <h2>Privileged Content</h2>
        {isAuthenticated() ? (
          <div>
            <h3>here's your privileged content:</h3>
            {this.state.todos.map((todo, i) => {
              return <li key={i}>{todo}</li>;
            })}
          </div>
        ) : (
          <h3>please log in to see privileged content</h3>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/todos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + sessionStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ todos: data.todos }))
      .catch(err => console.error(err));
  }
}

export default PrivilegedComponent;
