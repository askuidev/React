import React from "react";
import { render } from "react-dom";
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import FaMinusSquare from 'react-icons/lib/fa/minus-square'
import FaFlag from 'react-icons/lib/fa/flag'
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'


// Import React bootstrap
import ButtonGroup from './common/ButtonGroup';

class AssetAllocationTable extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  getStyle(prop, value) {
    const style = {};
    style[prop] = value;
    return style;
  }
  render() {
    const { open } = this.state;
    const assetAlcClass = open?'out in':'out collapse';
    return (
      <div className="allocationTableContainer" id="allocationTableContainer" style={{marginTop: "2px"}}>
        <div id="targetAllocationPanel" className="card">
          <div className="card-header">
            <a className="navbar-brand color-slate-blue"
              data-toggle="collapse"
              data-parent="#targetAllocationPanel"
              href="#targetAllocationPanelBody"
              onClick={()=>this.setState({open:!this.state.open})}>
              {!open ?
                  <FaPlusSquare /> : <FaMinusSquare />} Target Allocation Table
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
              </ul>
            </div>
            <ButtonGroup mainClass="float-right" buttons={["Summary", "Expanded", "Deep"]} />
          </div>
          <div id="targetAllocationPanelBody" className={"card-body "+assetAlcClass}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse">
                <ButtonGroup btnClass="btn-slate-blue" buttons={["Add Security"]} />
              </div>
              <ButtonGroup btnClass="btn-secondary" buttons={["Clear"]} />
            </nav>
            <table className="table table-striped table-bordered table-secondary text-dark targetAllocationTable">
              <tbody>
                <tr className="bg-dark text-light">
                  <td style={this.getStyle("width", 70)}>Symbol</td>
                  <td style={this.getStyle("width", 150)}>Description</td>
                  <td style={this.getStyle("width", 80)}>Sell/Buy Flag</td>
                  <td style={this.getStyle("width", 80)}>Auto RBAL Eligibility</td>
                  <td style={this.getStyle("width", 80)}>Value</td>
                  <td style={this.getStyle("width", 80)}>Current %</td>
                  <td style={this.getStyle("width", 80)}>Target %</td>
                  <td style={this.getStyle("width", 80)}>Target $</td>
                  <td style={this.getStyle("width", 50)}>Drift %</td>
                  <td style={this.getStyle("width", 80)}>Drift $<br/>Buy/Sell</td>
                  <td style={this.getStyle("width", 50)}>Cash</td>
                  <td style={this.getStyle("width", 80)}>Fixed Income</td>
                  <td style={this.getStyle("width", 50)}>Equity</td>
                  <td style={this.getStyle("width", 80)}>Alternatives</td>
                  <td style={this.getStyle("width", 80)}>Derivatives</td>
                  <td style={this.getStyle("width", 80)}>Other</td>
                </tr>
                <tr>
                  <td>cash</td>
                  <td>cash</td>
                  <td><FaFlag className="text-success" size="28" /></td>
                  <td><FaCheckCircle className="text-success" size="28" /></td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td><input type="text" className="form-control text-center" value="15"/></td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>cash</td>
                  <td>cash</td>
                  <td className="abs-top-right">
                    <FaFlag className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td className="abs-top-right">
                    <FaCheckCircle className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td><input type="text" className="form-control text-center" value="15"/></td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>cash</td>
                  <td>cash</td>
                  <td className="abs-top-right">
                    <FaFlag className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td className="abs-top-right">
                    <FaCheckCircle className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td><input type="text" className="form-control text-center" value="15"/></td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>cash</td>
                  <td>cash</td>
                  <td className="abs-top-right">
                    <FaFlag className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td className="abs-top-right">
                    <FaCheckCircle className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td><input type="text" className="form-control text-center" value="15"/></td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>cash</td>
                  <td>cash</td>
                  <td className="abs-top-right">
                    <FaFlag className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td className="abs-top-right">
                    <FaCheckCircle className="text-danger" size="28" /> <span className="abs-top-child text-secondary"><FaInfoCircle /></span>
                  </td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td><input type="text" className="form-control text-center" value="15"/></td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td>21.12 %</td>
                  <td>21,716 $</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="font-weight-bold">
                  <td></td>
                  <td>Total:</td>
                  <td></td>
                  <td></td>
                  <td>$102800</td>
                  <td>100</td>
                  <td>100</td>
                  <td>$102800</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Add/Exclude Cash:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$102800</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="bg-secondary text-dark font-weight-bold">
                  <td></td>
                  <td>Net Total:</td>
                  <td></td>
                  <td></td>
                  <td>$102800</td>
                  <td>100</td>
                  <td>100</td>
                  <td>$102800</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
