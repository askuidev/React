import React, { Component } from 'react';
import '../App.css';
import TargetAllocationTable from './TargetAllocationTable';
import DifferenceAllocationTable from './DifferenceAllocationTable';
import RebalanceDetailForm from './RebalanceDetailForm';
import Panel from './common/Panel';
import ButtonGroup from './common/ButtonGroup';

class AllocationTableContainer extends Component {
  render() {
    return (
      <div className="allocationPanelContainer">
        <div className="col-sm-9 no-padding">
          <TargetAllocationTable />
        </div>
        <div className="col-sm-3 no-padding">
          <Panel
            mainClass="allocationPanel differenceAllocationPanel panel-transparent"
            titleText="Security Allocation vs Target Allocation">
            <DifferenceAllocationTable />
          </Panel>
        </div>
        <div className="col-sm-12 no-padding">
          {false?
            <Panel
              mainClass="allocationPanel panel-transparent"
              titleText="Rebalance Detail">
              <RebalanceDetailForm />
            </Panel>:''}
        </div>
      </div>
    );
  }
}

export default AllocationTableContainer;
