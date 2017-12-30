import * as React from 'react';

interface NoDataRowProps {
    colSpan: number;
    message: string;
}

const NoDataRow = (props: NoDataRowProps) => {
    return (
      <tbody>
          <tr>
              <td colSpan={props.colSpan} className="table-footer-cell-padding text-center">{props.message}</td>
          </tr>
      </tbody>
    );
};

export default NoDataRow;
