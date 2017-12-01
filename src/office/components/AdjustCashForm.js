import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import ButtonGroup from './common/ButtonGroup';

class AdjustCashForm extends React.Component {
  onCheckChange = (value, e) => {
    const { id, onCheckChange } = this.props;
    if(onCheckChange) onCheckChange(id, {actionType: value}, e);
  }
  onValueChange = (e) => {
    const { id, onValueChange } = this.props;
    if(onValueChange) onValueChange(id, {actionValue: e.target.value}, e);
  }
  render() {
    const {
      mainClass = ""
    } = this.props;
    return (
      <div className={"form-horizontal col-sm-12 adjustCashForm "+mainClass}>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="control-label font-weight-normal">Please select your action below:</label>
            <ButtonGroup
              onRadioChange={this.onCheckChange}
              checkedRadio={this.props.actionType}
              buttonType="radio"
              buttons={[
                {text: "Withdraw", type: "radio", name: "actions"},
                {text: "Addition", type: "radio", name: "actions"}
              ]} />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter value"
              onChange={this.onValueChange}
              value={this.props.actionValue || ""} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {...bindActionCreators({...actions}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdjustCashForm);
