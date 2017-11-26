import React from "react";
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
      <td>{data.description}</td>
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
