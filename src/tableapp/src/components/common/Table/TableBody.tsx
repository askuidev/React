import * as React from 'react';
import TableRow from './TableRow';

interface TableRowDataProps {
    description: string;
    adjustCash: boolean;
    actionType: string;
    actionValue: string;
    currentPer: string;
    symbol: string;
    targetPer: string;
    value: string;
    id: string | number;
    targetPrice: string;
    buySellPrice: string;
    driftPer: string;
}

interface TableCellProps {
    value?: string;
    id?: string | number;
    field?: string;
}

interface TableBodyProps {
    allocationData?: TableRowDataProps[];
    fieldType?: string;
    onAdjustCashClick?: (allocationData: TableRowDataProps) => void;
    onDataChange?: (params: TableCellProps) => void;
}

class TableBody extends React.Component<TableBodyProps, {}> {
    renderRows() {
        const { allocationData, fieldType } = this.props;
        return allocationData && allocationData[0] && allocationData.map((row: TableRowDataProps) => (
            <TableRow
                key={row.id}
                rowData={row}
                fieldType={fieldType}
                onDataChange={this.props.onDataChange}
                onAdjustCashClick={this.props.onAdjustCashClick}
            />
        ));
    }
    render() {
        return (
          <tbody>
              {this.renderRows()}
          </tbody>
        );
    }
}

export default TableBody;
