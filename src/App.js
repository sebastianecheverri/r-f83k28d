import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.valor = 0
    this.state = {
      value: this.valor
    }
    
  }
  
  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.addOne.bind(this)}>Incrementa</button>
      </div>
    );
  }

  addOne() {
    this.valor ++
    this.setState({
      value: this.valor
    });
  }
}

export default App;
