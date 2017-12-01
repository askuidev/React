import React from "react";
import { Link } from 'react-router-dom';
import CurrencyFormatter from 'currency-formatter';
import Checkbox from './Checkbox';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetPer: 0
    };
  }
  componentWillMount() {
    this.setState({
      targetPer: this.props.data.targetPer
    });
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  getColorBox(color) {
    return <span className="square20" style={this.getStyle("backgroundColor",color)}></span>
  }
  getAdjustCash(id, {description, adjustCash, actionType, actionValue}) {
    const actionPrice = this.getRenderPrice(actionValue);
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
  getRenderPrice(price) {
    return CurrencyFormatter.format(price, { code: 'USD' });
  }
  getTargetInput(id, targetPercentage) {
    return <input
            type="text"
            className="form-control target-price-input"
            onChange={this.onTargetPerChange.bind(this, id)}
            value={targetPercentage} />
  }
  getTargetCheckbox(id) {
    return <Checkbox id={this.props.id} mainClass="abs-top-child custom-checkbox" />
  }
  onTargetPerChange = (id, e) => {
    let value = e.target.value.replace(/[^0-9.+0-9$]/g,'') || 0;
    this.props.onDataChange(value, id);
  }
  render() {
    const { data, id } = this.props;
    return <tr>
      <td>{data.symbol}</td>
      <td>
        {this.getAdjustCash(id, data)}
      </td>
      <td>{this.getRenderPrice(data.value)}</td>
      <td>{data.currentPer}</td>
      <td className="text-center abs-top-right">{this.getTargetInput(id, data.targetPer)}{this.getTargetCheckbox(id)}</td>
      <td>{this.getRenderPrice(data.targetPrice)}</td>
      <td>{data.driftPer}</td>
      <td>{this.getRenderPrice(data.buySellPrice)}</td>
    </tr>
  }
}

export default TableRow;
