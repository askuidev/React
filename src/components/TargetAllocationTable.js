import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import FaMinusSquare from 'react-icons/lib/fa/minus-square'
import FaFlag from 'react-icons/lib/fa/flag'
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'
import ButtonGroup from './common/ButtonGroup';
import CurrencyFormatter from 'currency-formatter';
import {Icon} from 'react-fa';

const allocationData = [
  {
    color: "",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  },
  {
    color: "",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  },
  {
    color: "red",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  },
  {
    color: "red",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  }
];

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetPercentage: 0
    };
  }
  componentWillMount() {
    this.setState({
      targetPercentage: this.props.data.targetPer
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
  getTargetInput(id) {
    return <input
            type="text"
            className="form-control target-price-input"
            onChange={this.onTargetPriceChange.bind(this, id)}
            value={this.state.targetPercentage} />
  }
  onTargetPriceChange = (id, e) => {
    this.setState({
      targetPercentage: e.target.value
    });
    this.props.onDataChange(e.target.value, id);
  }
  render() {
    const { data, id } = this.props;
    return <tr>
      <td>{data.symbol}</td>
      <td>{data.description}</td>
      <td>{this.getRenderPrice(data.value)}</td>
      <td>{data.currentPer}</td>
      <td>{this.getTargetInput(id)}</td>
      <td>{this.getRenderPrice(data.targetPrice)}</td>
      <td>{data.driftPer}</td>
      <td>{this.getRenderPrice(data.buySellPrice)}</td>
    </tr>
  }
}

class TableFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    }
  }
  componentWillMount() {
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  getRenderPrice(price) {
    return CurrencyFormatter.format(price, { code: 'USD' });
  }
  getSearchInput() {
    return <div className="input-group allocationSearchInput">
            <span className="input-group-addon"><Icon name="search" /></span>
            <input type="text"
              className="form-control"
              onChange={this.onSearchChange}
              value={this.state.searchText}
              placeholder="Add new" />
          </div>
  }
  getAdvancedSearchLink() {
    return <Link className="color-light-blue" to="/">Advanced Security Search</Link>
  }
  getSaveSecurityTargetBtn() {
    return <button className="btn btn-light-blue">Save Security Target</button>
  }
  getActionBtns() {
    return <ButtonGroup
            grouped={false}
            isGroup={false}
            withIcons={false}
            mainClass="pull-right"
            buttons={[
              {text: "Cancel", className: "btn-transparent color-light-blue"},
              {text: "Continue Auto Rebalance", className: "btn-light-blue active"}
            ]} />
  }
  calculateTotal(field) {
    const { data } = this.props;
    let total = data.reduceRight((prevValue, obj) => {
      return prevValue + +obj[field];
    },0);
    return total.toFixed(2);
  }
  onSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }
  render() {
    const { data } = this.props;
    return <tfoot>
      <tr>
        <td colSpan="3">
          {this.getSearchInput(data.targetPer)}
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td className="table-footer-cell-padding">Cash Addition/ Withdrawl</td>
        <td>{this.getRenderPrice(7780.00)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Total:</td>
        <td className="table-footer-cell-padding">{this.getRenderPrice(this.calculateTotal("value"))}</td>
        <td>{this.calculateTotal("currentPer")}</td>
        <td className="text-center">{this.calculateTotal("targetPer")}</td>
        <td>{this.getRenderPrice(this.calculateTotal("targetPrice"))}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colSpan="3">
          {this.getAdvancedSearchLink()}
        </td>
        <td colSpan="2">
          {this.getSaveSecurityTargetBtn()}
        </td>
        <td colSpan="3">
          {this.getActionBtns()}
        </td>
      </tr>
    </tfoot>
  }
}

class TargetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: allocationData
    };
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  onDataChange = (id, value) => {
    this.state.data.map((row, index) => {
      if(index === id) {
        row.targetPer=value;
      }
      return row;
    })
  }
  renderRows() {
    const { data } = this.state;
    return data.map((row, index, array) => <TableRow key={index} data={row} id={index} onDataChange={this.onDataChange} />)
  }
  render() {
    const { data } = this.state;
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        <div className="targetAllocationTableContainer">
          <table className="table fixed-table table-striped table-custom targetAllocationTable">
            <thead>
              <tr className="">
                <td style={this.getStyle("width", 80)}>Symbol</td>
                <td style={this.getStyle("width", 120)}>Description</td>
                <td style={this.getStyle("width", 80)}>Value</td>
                <td style={this.getStyle("width", 70)}>Current %</td>
                <td style={this.getStyle("width", 70)}>Target % <FaInfoCircle className="color-light-blue" /></td>
                <td style={this.getStyle("width", 70)}>Target $</td>
                <td style={this.getStyle("width", 70)}>Drift %</td>
                <td style={this.getStyle("width", 120)}>Drift $ Buy/Sell</td>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
            <TableFooter data={data} />
          </table>
        </div>
      </div>
    );
  }
}

export default TargetAllocationTable;
