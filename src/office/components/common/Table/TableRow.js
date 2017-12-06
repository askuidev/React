import React from "react";
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox';
import {
  getStyle,
  getPriceFormat
} from '../../../utils';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetPer: 0
    };
  }
  componentWillMount() {
    if(this.props.data) {
      this.setState({
        targetPer: this.props.data.targetPer
      });
    }
  }
  getColorBox(color) {
    return <span className="square20" style={getStyle("backgroundColor",color)}></span>
  }
  getAdjustCash() {
    const { data } = this.props;
    const { description, adjustCash, actionType, actionValue, id } = data;
    const actionPrice = getPriceFormat(actionValue);
    const actionText = actionType === "Withdraw"?actionPrice+"_WD":actionPrice+"_AD";
    return adjustCash?
      <div>
        <div>{description}</div>
        <div><Link className="adjustCashLink" to="/" onClick={this.props.onAdjustCashClick.bind(this, id)}>
          {actionValue?
            actionText:"Adjust Cash"}
        </Link></div>
      </div>
    :description;
  }
  getTargetInput(id, targetPercentage) {
    return <input
            type="text"
            className="form-control target-price-input"
            onChange={this.onTargetPerChange.bind(this, id)}
            value={targetPercentage} />
  }
  getTargetCheckbox(id) {
    return <Checkbox id={id} mainClass="abs-top-child custom-checkbox" />
  }
  onTargetPerChange = (id, e) => {
    let value = e.target.value.replace(/[^0-9.+0-9$]/g,'') || 0;
    this.props.onDataChange(value, id);
  }
  render() {
    const { data } = this.props;
    return <tr>
        <td>{data.symbol}</td>
        <td>
          {this.getAdjustCash()}
        </td>
        <td>{getPriceFormat(data.value)}</td>
        <td>{data.currentPer}</td>
        <td className="text-center abs-top-right">{this.getTargetInput(data.id, data.targetPer)}{this.getTargetCheckbox(data.id)}</td>
        <td>{getPriceFormat(data.targetPrice)}</td>
        <td>{data.driftPer}</td>
        <td>{getPriceFormat(data.buySellPrice)}</td>
      </tr>
  }
}

export default TableRow;
