import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../../../actions';
import TableRow from './TableRow';

class TableBody extends React.Component {
  renderRows() {
    const { allocationData } = this.props;
    return allocationData.map((row, index, array) =>
            <TableRow
              key={row.id}
              data={row}
              onDataChange={this.props.onDataChange}
              onAdjustCashClick={this.props.onAdjustCashClick} />);
  }
  render() {
    return <tbody>
      {this.renderRows()}
    </tbody>
  }
}

export default TableBody;
