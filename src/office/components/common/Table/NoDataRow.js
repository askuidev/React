import React from 'react';

const NoDataRow = (props) => {
  return <tbody>
    <tr>
      <td colSpan={props.colSpan} className="table-footer-cell-padding text-center">{props.message}</td>
    </tr>
  </tbody>
}

export default NoDataRow;
