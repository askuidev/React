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
    const { description, adjustCash, actionType, actionValue } = data;
    const actionPrice = getPriceFormat(actionValue);
    const actionText = actionType === "Withdraw"?actionPrice+"_WD":actionPrice+"_AD";
    return adjustCash?
      <div>
        <div>{description}</div>
        <div><Link className="adjustCashLink" to="/" onClick={this.props.onAdjustCashClick.bind(this, data)}>
          {actionValue?
            actionText:"Adjust Cash"}
        </Link></div>
      </div>
    :description;
  }
  getTargetPerInput(id, targetPer) {
    return <input
            type="text"
            className="form-control target-percent-input"
            onChange={this.onTargetPerChange.bind(this, id)}
            value={targetPer} />
  }
  onTargetPerChange = (id, e) => {
    const { onDataChange } = this.props;
    const field = "targetPer";
    let value = e.target.value.replace(/[^0-9.+0-9$]/g,'') || 0;
    if(onDataChange) onDataChange({value, id, field});
  }
  getTargetPriceInput(id, targetPrice) {
    return <input
            type="text"
            className="form-control target-price-input"
            onChange={this.onTargetPriceChange.bind(this, id)}
            value={targetPrice} />
  }
  onTargetPriceChange = (id, e) => {
    const { onDataChange } = this.props;
    const field = "targetPrice";
    let value = e.target.value.replace(/[^0-9.+0-9$]/g,'') || 0;
    if(onDataChange) onDataChange({value, id, field});
  }
  getTargetCheckbox(id) {
    return <Checkbox id={id} mainClass="custom-checkbox" />
  }
  render() {
    const { data, fieldType } = this.props;
    return <tr>
        <td>{data.symbol}</td>
        <td>
          {this.getAdjustCash()}
        </td>
        <td>{getPriceFormat(data.value)}</td>
        <td>{data.currentPer}</td>
        <td className="text-center">
          {fieldType === "percent"?this.getTargetPerInput(data.id, data.targetPer):data.targetPer}
          {fieldType === "percent"?this.getTargetCheckbox(data.id):""}
        </td>
        <td className="text-center">
          {fieldType === "dollar"?
            this.getTargetPriceInput(data.id, data.targetPrice):
            getPriceFormat(data.targetPrice)}
        </td>
        <td>{data.driftPer}</td>
        <td>{getPriceFormat(data.buySellPrice)}</td>
      </tr>
  }
}

export default TableRow;
