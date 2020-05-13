import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      dayArr: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }
  }

  render(){
    let week = this.state.dayArr.map((e, index) => {
      return <h2 key={index}>{e}</h2>
    })
      return (
    <div className="App">
      {week}
    </div>
  );
  }
}

export default App;
