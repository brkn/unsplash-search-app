import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Content from "./componenets/Content";
import Header from "./componenets/Header";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <Header {...props} headerClassName={"Index-header"} />
            )}
          />
          <Route
            exact
            path="/search/:collection/:querry"
            components={{
              Header: props => (
                <Header {...props} headerClassName={"Content-header"} />
              ),
              Content: Content
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
