import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import AllocationTableContainer from './components/AllocationTableContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="no-padding">
            <AllocationTableContainer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
