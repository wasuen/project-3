import React , { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router';

class App extends Component {
  
  state = {
    username: '',
    email: '',
    image: '',
    loading: true,
  }



  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }

}

export default App;
