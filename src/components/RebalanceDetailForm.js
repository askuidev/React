import React from "react";
import { render } from "react-dom";
import FaMinusSquare from 'react-icons/lib/fa/minus-square'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'


// Import React bootstrap
import ButtonGroup from './common/ButtonGroup';

class RebalanceDetailForm extends React.Component {
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
        <nav id="tableContainer" className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand color-slate-blue"
            data-toggle="collapse"
            data-parent="#tableContainer"
            href="#rebalanceDetailForm"
            onClick={()=>this.setState({open:!this.state.open})}>
            {!open ?
                <FaPlusSquare /> : <FaMinusSquare />} Rebalance Detail
          </a>
        </nav>
        <div id="rebalanceDetailForm" className={"rebalanceDetailForm "+assetAlcClass}>
          <div className="formContainer">
            <div className="row">
              <div className="col-8">
                <div className="row form-group">
                  <div className="col-4">
                    <label className="control-label"><span className="text-danger">*</span>Frequency</label>
                  </div>
                  <div className="col-8">
                    <select className="form-control">
                      <option>Month</option>
                      <option>Quarter</option>
                      <option selected>Annual</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <table className="table no-border-tr">
                  <tbody>
                    <tr>
                      <td>Next Rebalance</td>
                      <td>8/21/2017</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row no-padding">
              <div className="col-8">
                <div className="row form-group">
                  <div className="col-4">
                    <label className="control-label"><span className="text-danger">*</span>Accepted By</label>
                  </div>
                  <div className="col-8">
                    <input type="text" placeholder="Accepted By" className="form-control" value="SHS2" />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <table className="table no-border-tr">
                  <tbody>
                    <tr>
                      <td>Excluded Cash</td>
                      <td>$5,080</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ButtonGroup btnClass="btn-secondary" buttons={["Cancel", "Save As Draft", "Ramove Target"]} />
            <ButtonGroup btnClass="btn-slate-blue" buttons={["Next"]} />
          </nav>
        </div>
      </div>
    );
  }
}

export default RebalanceDetailForm;
