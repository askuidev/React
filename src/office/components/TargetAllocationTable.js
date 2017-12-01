import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../actions';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import TableRow from './common/TableRow';
import TableFooter from './common/TableFooter';
import Modal from './common/Modal';
import AdjustCashForm from './AdjustCashForm';

class TargetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      actionType: "",
      actionValue: "",
      actionId: null
    };
  }
  componentWillMount() {
    this.props.dispatch(actions.getAllocationData());
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  onDataChange = (value, id) => {
    const data = {id, targetPer: value};
    this.props.dispatch(actions.updateAllocationData(data));
  }
  onAdjustCashClick = (id) => {
    this.setState({
      showModal: true,
      rowId: id
    });
  }
  onModalHide = () => {
    this.setState({
      showModal: false
    });
  }
  onCheckChange = (actionId, {actionType}) => {
    this.setState({
      actionType,
      actionId
    });
  }
  onValueChange = (actionId, {actionValue}) => {
    this.setState({
      actionValue,
      actionId
    });
  }
  onSubmitClick = () => {
    const { actionType, actionValue, actionId } = this.state;
    this.props.dispatch(actions.updateAdjustCashData({actionType, actionValue, actionId}));
    this.onModalHide();
  }
  renderRows() {
    const { allocationData } = this.props;
    return allocationData.map((row, index, array) =>
        <TableRow
          key={index}
          data={row}
          id={index+1}
          onDataChange={this.onDataChange}
          onAdjustCashClick={this.onAdjustCashClick} />)
  }
  render() {
    const { actionType, actionValue } = this.state;
    const data = {
      actionType,
      actionValue
    };
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        <Modal
          mainClass="adjustCashModal"
          titleText="Adjust Cash"
          showModal={this.state.showModal}
          onModalHide={this.onModalHide}
          onSubmitClick={this.onSubmitClick}>
          <AdjustCashForm
            id={this.state.rowId}
            {...data}
            onCheckChange={this.onCheckChange}
            onValueChange={this.onValueChange}
          />
        </Modal>
        <div className="targetAllocationTableContainer">
          <table className="table fixed-table table-striped table-custom targetAllocationTable">
            <thead>
              <tr className="">
                <td style={this.getStyle("width", 80)}>Symbol</td>
                <td style={this.getStyle("width", 120)}>Description</td>
                <td style={this.getStyle("width", 80)}>Value</td>
                <td style={this.getStyle("width", 50)}>Current %</td>
                <td className="text-center" style={this.getStyle("width", 70)}>Target % <FaInfoCircle /></td>
                <td style={this.getStyle("width", 70)}>Target $</td>
                <td style={this.getStyle("width", 70)}>Drift %</td>
                <td style={this.getStyle("width", 120)}>Drift $ Buy/Sell</td>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
            <TableFooter />
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actions, dispatch), dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetAllocationTable);
