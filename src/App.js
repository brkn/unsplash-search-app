import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { BASEURL, CLIENT_ID, COLLECTION_IDS } from "./constants";

import ContentLayout from "./components/ContentLayout/ContentLayout";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {},
      content: []
    };
    this._isMounted = true;
  }
  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  searchPhotos = async () => {
    const { query, collections } = this.state.params;
    try {
      const source =axios.CancelToken.source();
      const response = await axios.get(BASEURL, {
        params: {
          client_id: CLIENT_ID,
          query: query,
          collections: COLLECTION_IDS[collections]
        },
        cancelToken: source.token
      });
      if (!this._isMounted) {
        source.cancel("Component is not mounted, request canceled; line48");
      } else {
        this.setState({
          content: response.data.results
        });
      }
    } catch (thrown) {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      } else {
        console.log(thrown);
      }
    }
  };

  setQuery = query => {
    this.setState(prevState => ({
      params: {
        collections: prevState.params.collections,
        query: query
      }
    }));
  };

  setCollection = collection => {
    this.setState(prevState => ({
      params: {
        collections: collection,
        query: prevState.params.query
      }
    }));
  };

  render() {
    const { params, content } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Header
                {...props}
                headerClassName={"index-header"}
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
                headerClassName={"content-header"}
                searchPhotos={this.searchPhotos}
                setQuery={this.setQuery}
                setCollection={this.setCollection}
                params={params}
                content={content}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
