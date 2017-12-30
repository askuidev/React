import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import ButtonGroup from '../ButtonGroup';
import {
    getPriceFormat,
    getCalculatedTotal
} from '../../../utils';

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

interface TableFooterProps {
    allocationData?: TableRowDataProps[];
    searchText?: string;
}

interface TableFooterState {
    searchText: string;
}

interface MyEventTarget extends EventTarget {
  value: string;
}

interface MyFormEvent extends React.FormEvent<HTMLInputElement> {
  target: MyEventTarget;
}

class TableFooter extends React.Component<TableFooterProps, TableFooterState> {
    constructor(props: TableFooterProps) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    getSearchInput() {
        return (
          <div className="input-group allocationSearchInput">
              <span className="input-group-addon">
                <Icon name="plus custom-icon" />
              </span>
              <input
                type="text"
                className="form-control"
                onChange={this.onSearchChange}
                value={this.state.searchText}
                placeholder="Add symbol/CUSIP"
              />
          </div>
        );
    }
    getAdvancedSearchLink() {
        return <Link className="color-light-blue" to="/">Advanced Security Search</Link>;
    }
    getSaveSecurityTargetBtn() {
        return <button className="btn btn-light-blue">Save Security Target</button>;
    }
    getActionBtns() {
        return (
          <ButtonGroup
              grouped={false}
              isGroup={false}
              withIcons={false}
              mainClass="pull-right"
              buttonType="button"
              buttons={[
                  { text: 'Cancel', className: 'btn-transparent color-light-blue' },
                  { text: 'Continue Auto Rebalance', className: 'btn-light-blue active' }
              ]} />
        );
    }
    onSearchChange = (e: MyFormEvent) => {
        this.setState({
            searchText: e.target.value
        });
    }
    render() {
        const { allocationData: data } = this.props;
        return data ? (
            <tfoot>
                <tr>
                    <td />
                    <td>Total:</td>
                    <td className="table-footer-cell-padding">{getPriceFormat(getCalculatedTotal(data, 'value'))}</td>
                    <td>{getCalculatedTotal(data, 'currentPer')}</td>
                    <td className="text-center">{getCalculatedTotal(data, 'targetPer')}</td>
                    <td className="text-center">{getPriceFormat(getCalculatedTotal(data, 'targetPrice'))}</td>
                    <td />
                    <td />
                </tr>
                <tr>
                    <td colSpan={3}>
                        <div className="pull-left">{this.getSearchInput()}</div>
                    </td>
                    <td />
                    <td />
                    <td />
                    <td colSpan={2}>
                      <div className="advancedSearchLink pull-right">{this.getAdvancedSearchLink()}</div>
                    </td>
                </tr>
            </tfoot>
          ) : (
            <tfoot />
          );
    }
}

export default TableFooter;
