import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MyApp from "../my-app/MyApp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MyApp />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
