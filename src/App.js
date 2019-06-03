import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Header from './components/Header/Header';
import Post from './components/Post/Post';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return(
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
          <Post />
          {/* <Post nickname="Ivy" avatar="./me.jpg" image="./escape-room.jpg" caption= "Talent Path Escape Room!" /> */}
          </section>
        </div>
      </ApolloProvider>
    );
  };
}

export default App;
