import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import ContentLayout from "./components/ContentLayout";
import Header from "./components/Header";

class App extends Component {
  state = {
    params: {
      collection: "",
      query: ""
    },
    content: {}
  };

  searchPhotos = () => {
    axios
      .get("https://site.com/", {
        params: {
          client_id:
            "bdafd9c0457f994a91c042f1445ff058ee00fbbe745f642d5037ba1dd170c157",
          query: this.state.params.query,
          collection: this.state.params.collection
        }
      })
      .then(response => {
        this.setState({
          content: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <Header
                {...props}
                headerClassName={"Index-header"}
                collection={this.state.params.collection}
                query={this.state.params.query}
                searchPhotos={this.searchPhotos}
              />
            )}
          />
          <Route
            path="/search/:collection/:query"
            render={props => <ContentLayout {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
