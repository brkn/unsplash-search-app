import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { baseUrl } from "./constants";

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
    const { query, collection } = this.state.params;
    axios
      .get(baseUrl, {
        params: {
          client_id:
            "bdafd9c0457f994a91c042f1445ff058ee00fbbe745f642d5037ba1dd170c157",
          query: query,
          collection: collection
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

  setQuery = q => {
    this.setState(prevState => ({
      params: {
        collection: prevState.params.collection,
        query: q
      }
    }));
  };

  setCollection = c => {
    this.setState(prevState => ({
      params: {
        collection: c,
        query: prevState.params.query
      }
    }));
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
                searchPhotos={this.searchPhotos}
                setQuery={this.setQuery}
                setCollection={this.setCollection}
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
