import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
const { connect } = require('react-redux');
import {
  getAllocationData,
  handleAdjustCashModal,
  updateAllocationTargetData
} from '../actions';
import Table from './common/Table';
import TableControls from './common/Table/TableControls';
import Panel from './common/Panel';
import AdjustCashModal from './AdjustCashModal';
import { Icon } from 'react-fa';

interface TableRowDataProps {
  description: string;
  adjustCash: boolean;
  actionType: string;
  actionValue: string;
  currentPer: string;
  symbol: string;
  targetPer: string;
  value: string;
  id: string | number;
  targetPrice: string;
  buySellPrice: string;
  driftPer: string;
}

interface TargetAllocationProps {
  getAllocationData: () => void;
  handleAdjustCashModal: (props: AdjustCashModal) => void;
  updateAllocationTargetData: (
    allocationData: TableRowDataProps[],
    props: ChangeAllocationData
  ) => void;
  allocationData: TableRowDataProps[];
  allocationId: string;
  showAdjustCashModal: boolean;
}

interface TargetAllocationState {
  leftGroupActive?: string;
  middleGroupActive?: string;
}

interface AdjustCashModal {
  type: string;
  data: any;
}

interface ChangeAllocationData {
  value: string;
  id: string;
  field: string;
}

class TargetAllocationTable extends React.Component<
  TargetAllocationProps,
  TargetAllocationState
> {
  constructor(props: TargetAllocationProps) {
    super(props);
    this.state = {
      leftGroupActive: 'summary',
      middleGroupActive: 'percent'
    };
  }
  componentWillMount() {
    this.props.getAllocationData();
  }
  onLeftGroupClick = (leftGroupActive: string) => {
    this.setState({
      leftGroupActive
    });
  }
  onMiddleGroupClick = (middleGroupActive: string) => {
    this.setState({
      middleGroupActive
    });
  }
  onAdjustCashClick = (data: {}) => {
    this.props.handleAdjustCashModal({ type: 'open', data });
  }
  onDataChange = ({ value, id, field }: ChangeAllocationData) => {
    const { allocationData } = this.props;
    this.props.updateAllocationTargetData(allocationData, { value, id, field });
    this.props.getAllocationData();
  }
  getSubHeader() {
    const { leftGroupActive, middleGroupActive } = this.state;
    return (
      <TableControls
        leftGroupActive={leftGroupActive}
        middleGroupActive={middleGroupActive}
        onLeftGroupClick={this.onLeftGroupClick}
        onMiddleGroupClick={this.onMiddleGroupClick}
      />
    );
  }
  render() {
    const { showAdjustCashModal } = this.props;
    const { middleGroupActive } = this.state;
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        {showAdjustCashModal ? (
          <AdjustCashModal showAdjustCashModal={showAdjustCashModal} />
        ) : (
          ''
        )}
        <Panel
          mainClass="allocationPanel securityTargetPanel panel-transparent"
          titleText="Security Target"
          subHeadingChildren={this.getSubHeader()}
        >
          <div className="targetAllocationTableContainer">
            <Table
              fieldType={middleGroupActive}
              onAdjustCashClick={this.onAdjustCashClick}
              onDataChange={this.onDataChange}
              {...this.props}
            />
          </div>
          <div className="targetAllocationTableControls">
            <span className="pull-right">
              <button className="btn btn-transparent color-light-blue cancel-btn">
                Cancel <Icon name="angle-right angle-icon" />
              </button>
              <button className="btn btn-transparent color-light-blue remove-security-btn">
                Remove Security Target
              </button>
              <button className="btn btn-transparent color-light-blue save-btn">
                Save
              </button>
              <button className="btn btn-light-blue active continue-btn">
                Continue Auto Rebalance
              </button>
            </span>
          </div>
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = (state: TargetAllocationProps) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch<TargetAllocationProps>) => {
  return {
    ...bindActionCreators(
      {
        getAllocationData,
        handleAdjustCashModal,
        updateAllocationTargetData
      },
      dispatch
    ),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TargetAllocationTable
);