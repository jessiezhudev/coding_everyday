import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux';
import { fetchUser } from '../actions/userAction';
import { fetchTweets } from '../actions/tweetsAction'
class Application extends Component {
  componentWillMount(){
    // this.props.dispatch(fetchUser());
  }
  fetchTweets(){
    // this.props.dispatch(fetchTweets());
  }
  render() {
    const {user, tweets} = this.props;
    if (!tweets.length) {
      return (<button onClick={this.props.onClick}>load Tweets</button>)
    }
    const mapTweets = tweets.map((tweet,index) =>  <li key={index}>{tweet.text}</li>)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{this.props.user.name}</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{mapTweets}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    tweets: state.tweets.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchTweets())
    }
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

// const App = connect((store)=>{
//   return{
//     user: store.user.user,
//     tweets: store.tweets.tweets
//   }
// })(Application)
export default App;
