import React from 'react';

export default class Checkbox extends React.Component {
  onChange = (id, e) => {
    if(this.props.onChange) this.props.onChange(id, e);
  }
  render() {
    const { id, label, mainClass } = this.props;
    return <div className={"pretty p-icon "+mainClass}>
            <input
              onChange={this.onChange.bind(this, id)}
              type="checkbox" />
            <div className="state">
              <i className="icon fa fa-times"></i>
              <label>{label}</label>
            </div>
          </div>
  }
}
