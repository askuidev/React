import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import CurrencyFormatter from 'currency-formatter';
import actions from '../../actions';
import ButtonGroup from './ButtonGroup';

class TableFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    }
  }
  componentDidUpdate() {
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
  onSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }
  getCalculatedTotal = (field) => {
    const { allocationData } = this.props;
    let total = allocationData.reduceRight((prevValue, obj) => {
      return prevValue + +obj[field];
    },0);
    return total.toFixed(2);
  }
  render() {
    const { allocationData } = this.props;
    return <tfoot>
      <tr>
        <td colSpan="3">
          {this.getSearchInput(allocationData.targetPer)}
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
        <td className="table-footer-cell-padding">{this.getRenderPrice(this.getCalculatedTotal("value"))}</td>
        <td>{this.getCalculatedTotal("currentPer")}</td>
        <td className="text-center">{this.getCalculatedTotal("targetPer")}</td>
        <td>{this.getRenderPrice(this.getCalculatedTotal("targetPrice"))}</td>
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


const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actions, dispatch), dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableFooter);
