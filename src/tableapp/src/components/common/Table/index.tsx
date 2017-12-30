import * as React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import NoDataRow from './NoDataRow';

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

interface TableProps {
  tableClass?: string;
  fieldType?: string;
  allocationData: TableRowDataProps[];
  onAdjustCashClick?: (params: TableRowDataProps) => void;
  onDataChange?: (params: TableCellProps) => void;
}

const Table = (props: TableProps) => {
  const tableClass =
    'table fixed-table table-striped table-custom targetAllocationTable ' +
    props.tableClass;
  const { allocationData } = props;
  return allocationData && allocationData[0] ? (
    <table className={tableClass}>
      <TableHeader {...props} />
      <TableBody {...props} />
      <TableFooter {...props} />
    </table>
  ) : (
    <table className={tableClass}>
      <TableHeader {...props} />
      <NoDataRow colSpan={8} message="No data found!" />
    </table>
  );
};

export default Table;
