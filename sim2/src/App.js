import React, { Component } from 'react';
import {Provider} from 'react-redux';
import duxStore from './ducks/store';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './components/Routes/Routes'
import Header from './components/Header/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={duxStore}>
          <div className="App">
            <Header/>
            <Routes/>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
