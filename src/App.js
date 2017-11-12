import React, { Component } from 'react';
import './App.css';
import AssetAllocationTable from './components/AssetAllocationTable';
import TargetAllocationTable from './components/TargetAllocationTable';
import RebalanceDetailForm from './components/RebalanceDetailForm';

class App extends Component {
  render() {
    return (
      <div className="no-padding">
        <div className="col-sm-12">
          <AssetAllocationTable />
          <TargetAllocationTable />
          <RebalanceDetailForm />
        </div>
      </div>
    );
  }
}

export default App;
