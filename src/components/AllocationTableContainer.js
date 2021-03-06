import React, { Component } from 'react';
import '../App.css';
import TargetAllocationTable from './TargetAllocationTable';
import DifferenceAllocationTable from './DifferenceAllocationTable';
import RebalanceDetailForm from './RebalanceDetailForm';
import Panel from './common/Panel';
import ButtonGroup from './common/ButtonGroup';

class AllocationTableContainer extends Component {
  constructor(props) {
    super(props);
  }
  getSubHeader() {
    return <div>
      <div className="col-xs-6 no-padding">
        <ButtonGroup
          grouped={false}
          isGroup={true}
          withIcons={false}
          mainClass="pull-left"
          activeIndex={0}
          buttons={[
            {text: "Summary", className: "btn-light-blue"},
            {text: "Expanded", className: "btn-light-blue"},
            {text: "Deep", className: "btn-light-blue"}
          ]} />
      </div>
      <div className="col-xs-6 no-padding">
        <ButtonGroup
          grouped={true}
          isGroup={true}
          withIcons={true}
          mainClass="pull-left"
          activeIndex={0}
          buttons={[
            {iconClass: "percent", className: "btn-light-blue"},
            {iconClass: "dollar", className: "btn-light-blue"}
          ]} />
      </div>
    </div>
  }
  render() {
    return (
      <div className="allocationPanelContainer">
        <div className="col-sm-9 no-padding">
          <Panel
            mainClass="allocationPanel securityTargetPanel panel-transparent"
            titleText="Security Target"
            subHeadingChildren={
              this.getSubHeader()
            }>
            <TargetAllocationTable />
          </Panel>
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
