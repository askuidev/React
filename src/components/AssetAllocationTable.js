import React from "react";
import { render } from "react-dom";
import FaMinusSquare from 'react-icons/lib/fa/minus-square'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'


// Import React bootstrap
import ButtonGroup from './common/ButtonGroup';

class AssetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    const { open } = this.state;
    const assetAlcClass = open?'out in':'out collapse';
    return (
      <div className="allocationTableContainer">
        <div id="assetAllocationPanel" className="card">
          <div className="card-header">
            <a className="navbar-brand color-slate-blue"
              data-toggle="collapse"
              data-parent="#assetAllocationPanel"
              href="#assetAllocationPanelBody"
              onClick={()=>this.setState({open:!this.state.open})}>
              {!open ?
                  <FaPlusSquare /> : <FaMinusSquare />} Asset Allocation Table
            </a>
            <ButtonGroup mainClass="float-right" buttons={["Summary", "Expanded", "Deep"]} />
          </div>
          <div id="assetAllocationPanelBody" className={"card-body "+assetAlcClass}>
            <table className="table table-bordered text-light assetAllocationTable">
              <tbody>
                <tr className="bg-secondary text-center">
                  <td rowSpan="2" width="20%">Asset Class</td>
                  <td colSpan="2">Current Allocation</td>
                  <td colSpan="2">Proposed Allocation</td>
                  <td colSpan="2">Drift( Proposed and PPA )</td>
                  <td colSpan="2">PPA asset location</td>
                </tr>
                <tr className="bg-secondary text-center">
                  <td>% Percentage</td>
                  <td>$ Dollar</td>
                  <td>% Percentage</td>
                  <td>$ Dollar</td>
                  <td>% Percentage</td>
                  <td>$ Dollar</td>
                  <td>% Percentage</td>
                  <td>$ Dollar</td>
                </tr>
                <tr className="bg-primary">
                  <td>cash and cash investments</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                </tr>
                <tr className="bg-danger">
                  <td>fixed income</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                </tr>
                <tr className="bg-warning">
                  <td>equity</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                </tr>
                <tr className="bg-success">
                  <td>alternatives</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                </tr>
                <tr className="bg-primary">
                  <td>derivatives</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                </tr>
                <tr className="bg-dark">
                  <td>other</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                </tr>
                <tr className="bg-secondary">
                  <td>total</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="bg-light text-dark">
                  <td>Cash addition/withdrawl</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="bg-secondary no-border-tr">
                  <td>Net balance</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AssetAllocationTable;
