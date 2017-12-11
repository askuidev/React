import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import Modal from './common/Modal';
import AdjustCashForm from './AdjustCashForm';
import { getAdjustCashFormData } from '../utils';

class AdjustCashModal extends React.Component {
  constructor() {
    super();
    this.state = {
      actionType: "",
      actionValue: ""
    };
  }
  componentWillMount() {
    const { actionType, actionValue } = this.props.adjustCashData;
    this.setState({
      actionType,
      actionValue
    });
  }
  onModalHide = () => {
    this.props.handleAdjustCashModal("hide");
  }
  onCheckChange = (actionType, e) => {
    this.setState({actionType});
  }
  onValueChange = (e) => {
    let value = e.target.value.replace(/[^0-9.+0-9$]/g,'') || 0;
    this.setState({actionValue: value});
  }
  onClearClick = () => {
    this.setState({
      actionType: "",
      actionValue: ""
    });
  }
  onSubmitClick = () => {
    const { allocationData, allocationId } = this.props;
    this.props.updateAllocationData(allocationData, {id: allocationId, ...this.state});
    this.onModalHide();
  }
  render() {
    const {
      mainClass = "",
      showAdjustCashModal
    } = this.props;
    return (
      <div className={"adjustCashModalContainer "+mainClass}>
        <Modal
          mainClass="adjustCashModal"
          titleText="Adjust Cash"
          showModal={showAdjustCashModal}
          onModalHide={this.onModalHide}
          onSubmitClick={this.onSubmitClick.bind(this)}>
          <AdjustCashForm
            {...this.state}
            onCheckChange={this.onCheckChange}
            onValueChange={this.onValueChange}
            onClearClick={this.onClearClick} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {...bindActionCreators({...actions, dispatch}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdjustCashModal);
