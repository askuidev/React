import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import AllocationTableContainer from './components/AllocationTableContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="no-padding">
          <AllocationTableContainer />
        </div>
      </Router>
    );
  }
}

export default App;
