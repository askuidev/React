import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../actions';
import Table from './common/Table';
import Modal from './common/Modal';
import AdjustCashForm from './AdjustCashForm';

class TargetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      actionType: "",
      actionValue: "",
      id: null
    };
  }
  componentWillMount() {
    this.props.dispatch(actions.getAllocationData());
  }
  onModalHide = () => {
    this.props.dispatch(actions.handleAdjustCashModal("hide"));
  }
  onCheckChange = ({actionType}) => {
    this.setState({
      actionType
    });
  }
  onValueChange = ({actionValue}) => {
    this.setState({
      actionValue
    });
  }
  onSubmitClick = () => {
    const { allocationData } = this.props;
    this.props.dispatch(actions.updateAdjustCashData(allocationData, {...this.state}));
    this.onModalHide();
  }
  onClearClick = () => {
    this.setState({
      actionValue: ""
    });
  }
  onAdjustCashClick = (id) => {
    this.props.dispatch(actions.handleAdjustCashModal("open"));
    this.setState({
      id
    });
  }
  render() {
    const { actionType, actionValue } = this.state;
    const { showAdjustCashModal, allocationData } = this.props;
    const data = {
      actionType,
      actionValue
    };
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        <Modal
          mainClass="adjustCashModal"
          titleText="Adjust Cash"
          showModal={showAdjustCashModal}
          onModalHide={this.onModalHide}
          onSubmitClick={this.onSubmitClick}>
          <AdjustCashForm
            {...data}
            onCheckChange={this.onCheckChange}
            onValueChange={this.onValueChange}
            onClearClick={this.onClearClick} />
        </Modal>
        <div className="targetAllocationTableContainer">
          <Table {...this.props} onAdjustCashClick={this.onAdjustCashClick} />
        </div>
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
