import React from "react";
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import ButtonGroup from '../ButtonGroup';
import {
  getPriceFormat,
  getCalculatedTotal
} from '../../../utils'

class TableFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    }
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
            activeIndex={0}
            buttonType="button"
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
  render() {
    const { allocationData:data } = this.props;
    return <tfoot>
      <tr>
        <td colSpan="3">
          <div className="pull-left">{this.getSearchInput(data.targetPer)}</div>
          <div className="advancedSearchLink pull-left">{this.getAdvancedSearchLink()}</div>
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
        <td>{getPriceFormat(7780.00)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Total:</td>
        <td className="table-footer-cell-padding">{getPriceFormat(getCalculatedTotal(data, "value"))}</td>
        <td>{getCalculatedTotal(data, "currentPer")}</td>
        <td className="text-center">{getCalculatedTotal(data, "targetPer")}</td>
        <td>{getPriceFormat(getCalculatedTotal(data, "targetPrice"))}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colSpan="3">

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

export default TableFooter;
