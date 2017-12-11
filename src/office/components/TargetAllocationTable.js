import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../actions';
import Table from './common/Table';
import TableControls from './common/Table/TableControls';
import Panel from './common/Panel';
import AdjustCashModal from './AdjustCashModal';

class TargetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      leftGroupActive: "summary",
      middleGroupActive: "percent"
    };
  }
  componentWillMount() {
    this.props.getAllocationData();
  }
  onLeftGroupClick = (leftGroupActive) => {
    this.setState({
      leftGroupActive
    });
  }
  onMiddleGroupClick = (middleGroupActive) => {
    this.setState({
      middleGroupActive
    });
  }
  onAdjustCashClick = (data) => {
    this.props.handleAdjustCashModal({type: "open", data});
  }
  onDataChange = ({value, id, field}) => {
    const { allocationData, allocationId } = this.props;
    this.props.updateAllocationTargetData(allocationData, {value, id, field});
  }
  getSubHeader() {
    const { leftGroupActive, middleGroupActive } = this.state;
    return <TableControls
      leftGroupActive={leftGroupActive}
      middleGroupActive={middleGroupActive}
      onLeftGroupClick={this.onLeftGroupClick}
      onMiddleGroupClick={this.onMiddleGroupClick} />;
  }
  render() {
    const { showAdjustCashModal } = this.props;
    const { middleGroupActive } = this.state;
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        {showAdjustCashModal?<AdjustCashModal showAdjustCashModal={showAdjustCashModal} />:""}
        <Panel
          mainClass="allocationPanel securityTargetPanel panel-transparent"
          titleText="Security Target"
          subHeadingChildren={this.getSubHeader()}>
          <div className="targetAllocationTableContainer">
            <Table
              fieldType={middleGroupActive}
              onAdjustCashClick={this.onAdjustCashClick}
              onDataChange={this.onDataChange}
              {...this.props} />
          </div>
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actions, dispatch), dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetAllocationTable);
