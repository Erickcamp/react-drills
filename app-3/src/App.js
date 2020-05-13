import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterWeek: "",
      daysArr: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    };
  }

  handleChange(filter) {
    this.setState({ filterWeek: filter });
  }

  render() {
    let week = this.state.daysArr
      .filter((element, index) => {
        return element.includes(this.state.filterWeek);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      })
      

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}/>
        {week}
      </div>
    );
  }
}

export default App;