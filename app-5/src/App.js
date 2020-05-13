import React, { Component } from "react";
import "./App.css";
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://skydiveperris.com/b/wp-content/uploads/2018/08/angle-flying-coach.jpg'} />
      </div>
    );
  }
}

export default App;