import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ContentLayout from "./components/ContentLayout";
import Header from "./components/Header";

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
            path="/search/:collection/:querry"
            render={props => (
              <ContentLayout {...props}/>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
