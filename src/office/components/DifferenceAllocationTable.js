import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../actions';
import { getStyle } from '../utils';
import NoDataRow from './common/Table/NoDataRow';

class TableRow extends React.Component {
  getColorBox(color) {
    return <span className="square40" style={getStyle("backgroundColor",color)}></span>
  }
  getRow() {
    const { data } = this.props;
    return <tr>
        <td style={getStyle("padding","5px")}>{this.getColorBox(data.color)}</td>
        <td>{data.assetClass}</td>
        <td>{data.difference}</td>
      </tr>
  }
  render() {
    const { noData } = this.props;
    return noData?this.noDataRow():this.getRow();
  }
}

class DifferenceAllocationTable extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.getAssetData());
  }
  renderRows() {
    const { assetData } = this.props;
    return assetData.map((row, index) => <TableRow key={index} data={row} />)
  }
  render() {
    const { assetData } = this.props;
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        <div className="differenceAllocationTableContainer">
          <table className="table fixed-table table-striped table-custom">
            <thead>
              <tr>
                <td style={getStyle("width", 30)}></td>
                <td style={getStyle("width", 100)}>Asset Class</td>
                <td style={getStyle("width", 50)}>Difference</td>
              </tr>
            </thead>
            {assetData && assetData[0] ?
              <tbody>
                {this.renderRows()}
              </tbody>:
              <NoDataRow colSpan="3" message="No data found!" />}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actions, dispatch), dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(DifferenceAllocationTable);
