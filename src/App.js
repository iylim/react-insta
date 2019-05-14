import React, { Component } from 'react';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <section class="App-main">
        <Post nickname="Ivy" avatar="./me.jpg" image="./escape-room.jpg" caption= "Talent Path Escape Room!" />
        <Post nickname="Ivy" avatar="./me.jpg" image="./escape-room.jpg" caption= "Talent Path Escape Room!" />
        
        </section>
      </div>
    );
  };
}

export default App;
