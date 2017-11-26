import React from "react";

const assetData = [
  {
    color: "#83C7BA",
    assetClass: "cash",
    difference: "5%"
  },
  {
    color: "#59036F",
    assetClass: "fixed income",
    difference: "5%"
  },
  {
    color: "#025B97",
    assetClass: "cash",
    difference: "5%"
  },
  {
    color: "#FF9800",
    assetClass: "cash",
    difference: "5%"
  }
];

class TableRow extends React.Component {
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  getColorBox(color) {
    return <span className="square40" style={this.getStyle("backgroundColor",color)}></span>
  }
  render() {
    const { data } = this.props;
    return <tr>
      <td style={this.getStyle("padding","5px")}>{this.getColorBox(data.color)}</td>
      <td>{data.assetClass}</td>
      <td>{data.difference}</td>
    </tr>
  }
}

class AssetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: assetData
    };
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  renderRows() {
    const { data } = this.state;
    return data.map((row, index) => <TableRow key={index} data={row} />)
  }
  render() {
    return (
      <div className="allocationTableContainer" id="allocationTableContainer">
        <div className="differenceAllocationTableContainer">
          <table className="table fixed-table table-striped table-custom">
            <thead>
              <tr>
                <td style={this.getStyle("width", 30)}></td>
                <td style={this.getStyle("width", 100)}>Asset Class</td>
                <td style={this.getStyle("width", 50)}>Difference</td>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AssetAllocationTable;
