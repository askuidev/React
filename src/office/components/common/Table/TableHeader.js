import React from "react";
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import {
  getStyle
} from '../../../utils'

class TableHeader extends React.Component {
  render() {
    return <thead>
        <tr className="">
          <td style={getStyle("width", 80)}>Symbol</td>
          <td style={getStyle("width", 120)}>Description</td>
          <td style={getStyle("width", 80)}>Value</td>
          <td style={getStyle("width", 50)}>Current %</td>
          <td className="text-center" style={getStyle("width", 70)}>Target % <FaInfoCircle /></td>
          <td style={getStyle("width", 70)}>Target $</td>
          <td style={getStyle("width", 70)}>Drift %</td>
          <td style={getStyle("width", 120)}>Drift $ Buy/Sell</td>
        </tr>
      </thead>
  }
}

export default TableHeader;
