import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { BASEURL, CLIENT_ID } from "./constants";

import ContentLayout from "./components/ContentLayout/ContentLayout";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {},
      content: []
    };
  }
  searchPhotos = () => {
    const { query, collections } = this.state.params;
    axios
      .get(BASEURL, {
        params: {
          client_id: CLIENT_ID,
          query: query,
          collections: collections
        }
      })
      .then(response => {
        this.setState({
          content: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  setQuery = q => {
    this.setState(prevState => ({
      params: {
        collections: prevState.params.collections,
        query: q
      }
    }));
  };

  setCollection = c => {
    this.setState(prevState => ({
      params: {
        collections: c,
        query: prevState.params.query
      }
    }));
  };

  render() {
    const { params, content } = this.state;
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
                params={params}
              />
            )}
          />
          <Route
            path="/search"
            render={props => (
              <ContentLayout
                {...props}
                headerClassName={"Content-header"}
                searchPhotos={this.searchPhotos}
                setQuery={this.setQuery}
                setCollection={this.setCollection}
                params={params}
                content={content}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
