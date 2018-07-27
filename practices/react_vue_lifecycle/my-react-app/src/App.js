import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jessie",
      age: 25
    };
    this.handleClick = this.handleClick.bind(this);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextState, 'shouldComponentUpdate nextState')
    return true
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  handleClick() {
    this.setState(prevState => ({
      age: prevState.age +1
    }));
  }

  render() {

    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div>
            name: {this.state.name}
          </div>
          <div>
            age:  {this.state.age}
          </div>
          <button onClick={this.handleClick}>Click</button>
        </div>
      </div>
    );
  }
}

export default App;
